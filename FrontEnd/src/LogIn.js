import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { authentication, syncLocalStorageWithContext } from './Helper';
import UserDetails from './UserDetails';

const LogIn = () => {
  const user = useContext(UserDetails);
  syncLocalStorageWithContext(user);
  const [redirectTo, setRedirectTo] = useState('');
  console.log(user.current, localStorage);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userWarning, setUserWarning] = useState('');
  const [passWarning, setPassWarning] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    setUserWarning('');
    setPassWarning('');
    if (username.length === 0) {
      setUserWarning('invalid username');
      document.getElementById('username').focus();
    } else if (password.length === 0) {
      setPassWarning('invalid password');
      document.getElementById('password').focus();
    } else {
      // Authentication verification
      const data = await authentication(username, password);
      if (data.auth) {
        user.current = {
          username: username,
          isLoggedIn: true,
        };
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        setRedirectTo('/');
      } else {
        user.current = { username: '', isLoggedIn: false };
        alert('invalid username or password');
        setUsername('');
        setPassword('');
      }
    }
  };
  return redirectTo !== '' ? (
    <Redirect to={redirectTo} />
  ) : (
    <div className="login flex h-screen w-screen">
      {/* <h2>Login</h2> */}
      <div className="font-heading bg-white m-auto h-72 rounded-xl overflow-hidden">
        <div className="text-2xl p-3 text-center bg-secondary text-white">
          LOGIN
        </div>
        <form onSubmit={(e) => formSubmit(e)}>
          <div className="px-10 pt-6">
            <label htmlFor="Username">
              Username
              <input
                className="bg-primary2 text-white ml-4 mb-3 mt-8 pl-2 rounded"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="username"
              />
              <h5 className="text-xs text-red-600">{userWarning}</h5>
            </label>
            <label htmlFor="Password">
              Password
              <input
                className="bg-primary2 text-white ml-5 mb-3 pl-2 rounded"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
              />
              <h5 className="text-xs text-red-600">{passWarning}</h5>
            </label>
          </div>
          <div className="text-center pt-3">
            <button className="bg-primary2 text-white hover:opacity-70 px-2 pt-0.5 pb-1 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
