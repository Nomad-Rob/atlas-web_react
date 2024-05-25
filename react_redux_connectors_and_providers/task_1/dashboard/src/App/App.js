import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  body: {
      textAlign: 'center',
  },
  headerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderBottom: '5px solid #00005C',
      width: '100%',
  },
  headerNotifications: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
  },
  footer: {
      fontFamily: "'Galano Grotesque Alt', sans-serif",
      fontStyle: 'italic',
      fontSize: '1rem',
      borderTop: '5px solid #00003C',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: '0',
  }
});

const mapStateToProps = state => {
  return {
      isLoggedIn: state.ui.isUserLoggedIn,
      displayDrawer: state.ui.isNotificationDrawerVisible
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: {
              email: '',
              password: '',
              isLoggedIn: false
          },
          listNotifications: [
              { id: 1, type: 'default', value: 'New course available' },
              { id: 2, type: 'urgent', value: 'New resume available' },
              { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
          ]
      };
  }

  logIn = (email, password) => {
      this.setState({
          user: {
              email,
              password,
              isLoggedIn: true
          }
      });
  };

  logOut = () => {
      this.setState({
          user: {
              email,
              password,
              isLoggedIn: false
          }
      });
  };

  markNotificationAsRead = (id) => {
      this.setState(prevState => ({
          listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
      }));
  };

  componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
          event.preventDefault();
          this.logOut();
      }
  };

  render() {
      const { isLoggedIn, displayDrawer, listNotifications, displayNotificationDrawer, hideNotificationDrawer } = this.props;

      return (
          <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
              <div className={css(styles.headerWrapper)}>
                  <Header />
                  <div className={css(styles.headerNotifications)}>
                      <Notifications
                          listNotifications={listNotifications}
                          displayDrawer={displayDrawer}
                          handleDisplayDrawer={displayNotificationDrawer}
                          handleHideDrawer={hideNotificationDrawer}
                          markNotificationAsRead={this.markNotificationAsRead}
                      />
                  </div>
              </div>
              <div className={css(styles.body)}>
                  {isLoggedIn ? (
                      <BodySectionWithMarginBottom title='Course List'>
                          <CourseList listCourses={listCourses} />
                      </BodySectionWithMarginBottom>
                  ) : (
                      <BodySectionWithMarginBottom title='Log in to continue'>
                          <Login logIn={this.logIn} />
                      </BodySectionWithMarginBottom>
                  )}
                  <div>
                      <BodySection title='News from the School'>
                          <p>This is the latest news from our school community made by Rob!</p>
                      </BodySection>
                  </div>
              </div>
              <Footer />
          </AppContext.Provider>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
