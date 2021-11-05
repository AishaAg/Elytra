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
    <div className="h-screen w-screen">
      <nav className="flex justify-end bg-white h-20">
        <div className="p-4">
          <ul>
            <Link to="/login">
              <button className="bg-white rounded-full border-primary border-2 p-1 text-primary text-lg font-bold font-heading hover:text-white hover:bg-primary transition: ease-out duration-500">
                LOGIN
              </button>
            </Link>
          </ul>
        </div>
      </nav>
      <div>
        <h1 className="font-heading font-bold pt-16  text-center text-8xl text-white">
          Elytra
        </h1>
        <section className="flex justify-center">
          <img
            className="bg-primary"
            class="active"
            src="https://techaccess.org/wp-content/uploads/2019/08/animat-chat.gif"
          />
        </section>
        <p className="px-6 py-10 text-2xl text-center text-white font-heading">
          A self hosted chatting application
        </p>
      </div>
    </div>
  );
};

export default Home;
