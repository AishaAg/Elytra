import { Redirect } from 'react-router';

const logout = (user) => {
  user.current = { username: '', isLoggedIn: false, profilePicture: null };
  localStorage.clear();
};

const checkLoggedIn = async (user) => {
  syncLocalStorageWithContext(user);
  if (!user.current.isLoggedIn) {
    return <Redirect to="/login" />;
  }
};

const authentication = async (username, password) => {
  const data = { username: username, password: password };
  const res = await fetch(`http://elytra.blehh.me/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const authorization = async () => {
  token = localStorage.getItem('token');
  const res = await fetch(`http://elytra.blehh.me/token-validation`, {
    headers: {
      'x-auth-token': token,
    },
  });
  const ret = await res.json();
  return ret;
};

const syncLocalStorageWithContext = async (user) => {
  token = localStorage.getItem('token');
  if (token === null) {
    // console.log('User not logged in');
    logout(user);
    return;
  } else if (!user.current.isLoggedIn) {
    const data = await authorization();
    // console.log(data);
    if (!data.auth) {
      user.current = {
        isLoggedIn: false,
        username: '',
        profilePicture: null,
      };
    } else {
      user.current = {
        isLoggedIn: true,
        username: data.result.username,
        profilePicture: null,
      };
    }
  }
};
export { authentication, logout, syncLocalStorageWithContext, authorization };
// export default authorization;
// export default checkLoggedIn;
