import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext'; 

function Footer() {
  // Using useContext to subscribe to the AppContext
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {/* Conditionally rendering the Contact us link based on the user's login status */}
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
