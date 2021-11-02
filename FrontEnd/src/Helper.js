import { Redirect } from 'react-router';

const logout = (user) => {
  user.current = { username: '', isLoggedIn: false, profilePicture: null };
  localStorage.clear();
};

const checkLoggedIn = (user) => {
  syncLocalStorageWithContext(user);
  return user.current.isLoggedIn;
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

const syncLocalStorageWithContext = (user) => {
  token = localStorage.getItem('token');
  if (token === null) {
    // console.log('User not logged in');
    logout(user);
    return;
  } else if (!user.current.isLoggedIn) {
    // console.log(data);
    user.current = {
      isLoggedIn: true,
      username: localStorage.getItem('username'),
    };
  }
};
export { authentication, logout, syncLocalStorageWithContext, checkLoggedIn };
// export default authorization;
// export default checkLoggedIn;
