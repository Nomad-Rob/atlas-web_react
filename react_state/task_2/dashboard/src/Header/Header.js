import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; // Adjust the import path as necessary

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#ffffff',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'rgb(247, 4, 4)',
  },
  logoutSection: {
    cursor: 'pointer',
  }
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.appHeader)}>
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)} onClick={logOut}>
            Welcome {user.email} (logout)
          </div>
        )}
      </header>
    );
  }
}

export default Header;
