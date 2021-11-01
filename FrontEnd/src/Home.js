import { useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import { logout, syncLocalStorageWithContext, authorization } from './Helper';
const Home = () => {
  const user = useContext(UserDetails);
  return (
    <div>
      <h1>Elytra</h1>
      {user.current.isLoggedIn ? (
        <>
          <h2>Welcome, {user.current.username}!</h2>
          <button
            onClick={() => {
              logout(user)(<Redirect to="/login" />);
            }}
          >
            logout
          </button>
        </>
      ) : (
        <Link to="/login">
          <button>login</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
