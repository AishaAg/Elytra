import { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userWarning, setUserWarning] = useState('');
  const [passWarning, setPassWarning] = useState('');

  return (
    <div className="login">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
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
            setUsername('');
            setPassword('');
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
