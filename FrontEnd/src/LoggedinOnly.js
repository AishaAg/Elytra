import { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { checkLoggedIn } from './Helper';
import UserDetails from './UserDetails';
import { logout } from './Helper';

const LoggedInOnly = () => {
  const user = useContext(UserDetails);
  const res = checkLoggedIn(user);
  const [redirectTo, setRedirectTo] = useState('');

  return res ? (
    <>
      <h2>Welcome, {user.current.username}!</h2>
      <button
        onClick={() => {
          logout(user);
          setRedirectTo('/login');
        }}
      >
        logout
      </button>
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default LoggedInOnly;
