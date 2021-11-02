import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import { checkLoggedIn } from './Helper';
const Home = () => {
  const user = useContext(UserDetails);
  const res = checkLoggedIn(user);
  return res ? (
    <Redirect to="/logged-in-only" />
  ) : (
    <div>
      <h1>Elytra</h1>
      <p>A self hosted chatting application</p>
      <Link to="/login">
        <p>Click here to visit login page</p>
      </Link>
    </div>
  );
};

export default Home;
