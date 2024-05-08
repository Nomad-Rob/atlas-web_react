import React, { Component } from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    // Initial state can be defined here
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
  }

  render() {
    const { isLoggedIn } = this.props; // Accessing isLoggedIn from props
    const { listCourses, listNotifications } = this.state; // Destructuring state

    return (
      <>
        <div className="App-header-wrapper">
          <Header />
          <div className="App-menu-notifications">
            <Notifications listNotifications={listNotifications} />
          </div>
        </div>
        <div className="App">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
