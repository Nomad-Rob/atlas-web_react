import React, { Component } from 'react';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appHeaderWrapper: {
    backgroundColor: '#ffffff',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'rgb(247, 4, 4)',
  },
  appMenuNotifications: {
    margin: '40px',
  },
  appFooter: {
    backgroundColor: '#ffffff',
    color: 'rgb(0, 0, 0)',
    padding: '10px',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    return (
      <>
        <div className={css(styles.appHeaderWrapper)}>
          <Header />
          <div className={css(styles.appMenuNotifications)}>
            <Notifications listNotifications={listNotifications} />
          </div>
        </div>
        <div className={css(styles.app)}>
          <BodySectionWithMarginBottom title={isLoggedIn ? "Course list" : "Log in to continue"}>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>This is the latest news from our school community made by Rob!</p>
          </BodySection>
          <Footer className={css(styles.appFooter)} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
