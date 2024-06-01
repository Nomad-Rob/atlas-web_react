import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

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

const mapStateToProps = (state) => {

  const uiReducer = state.ui;
  const isLoggedIn = uiReducer.get('isUserLoggedIn');
  const email = uiReducer.getIn(['user', 'email']);

  return { user: { isLoggedIn, email } };
};

const mapDispatchToProps = {
  logOut: logout,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
