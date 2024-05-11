import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    borderTop: '5px solid red',
    borderBottom: '5px solid #00003C',
  },
  paragraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '1.3rem',
    margin: '4rem 2rem 1rem 4rem',
  },
  label: {
    paddingRight: '.5rem',
  },
  input: {
    marginRight: '1rem',
    border: '1px solid #00003C',
    borderRadius: '8px',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
  },
  button: {
    backgroundColor: '#ffffff',
    border: '1px solid #00003C',
    borderRadius: '8px',
    padding: '.4rem',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
  focusedInput: {
    ':focus': {
      borderColor: '#0d0e0d !important',
      outline: '2px solid #000000',
    }
  }
});


function Login() {
  return (
    <React.Fragment>
      <div className="Login-body">
      <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
