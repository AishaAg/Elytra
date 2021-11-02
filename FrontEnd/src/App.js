import ReactDOM from 'react-dom';
import LogIn from './LogIn';
import UserDetails from './UserDetails';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Home from './Home';
import LoggedInOnly from './LoggedinOnly';
const App = () => {
  const user = useRef({
    username: '',
    isLoggedIn: false,
    profilePicture: null,
  });

  return (
    <UserDetails.Provider value={user}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/logged-in-only" exact component={LoggedInOnly} />
        </Switch>
      </Router>
    </UserDetails.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
