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
    <div className="flex h-56 w-72 m-auto bg-white rounded-xl">
      <div className="m-auto">
        <h2 className="text-center text-primary text-2xl font-bold p-3">
          Welcome, {user.current.username}!
        </h2>
        <div className="text-center p-6">
          <button
            className="bg-primary2 text-white hover:opacity-70 px-2 pt-0.5 pb-1 rounded-full"
            onClick={() => {
              logout(user);
              setRedirectTo('/login');
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default LoggedInOnly;
