import React from 'react';

// Define a default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

// Define a default logout function
const defaultLogOut = () => {};

// Create a React Context with the default values
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut
});

export default AppContext;
