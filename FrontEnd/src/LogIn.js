import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { authentication, syncLocalStorageWithContext } from './Helper';
import UserDetails from './UserDetails';

const LogIn = () => {
  const user = useContext(UserDetails);
  syncLocalStorageWithContext(user);
  if (user.current.isLoggedIn) {
    return <Redirect to="/" />;
  }
  const [username, setUsername] = useState('soumya_16_09');
  const [password, setPassword] = useState('bello');
  const [userWarning, setUserWarning] = useState('');
  const [passWarning, setPassWarning] = useState('');

  return (
    <div className="login">
      <h2>Login</h2>
      <form
        onSubmit={async (e) => {
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
              setPassword('dcbkcdkhadk');
            } else {
              user.current = { username: '', isLoggedIn: false };
              alert('invalid username or password');
              setUsername('');
              setPassword('');
            }
          }
        }}
      >
        <label htmlFor="Username">
          Username
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="username"
          />
          <h5>{userWarning}</h5>
        </label>
        <hr />
        <label htmlFor="Password">
          Password
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
          <h5>{passWarning}</h5>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
