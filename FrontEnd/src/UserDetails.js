import { createContext } from 'react';

const UserDetails = createContext({
  current: {
    isLoggedIn: false,
    username: '',
    profilePicture: null,
  },
});
export default UserDetails;
