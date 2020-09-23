import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../hellofresh-logo.svg';

function Index() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="hellofresh logo" />
        </Link>
      </div>
      <div className="footer-description">
        <div className="footer-description_inner">©HelloFresh 2020</div>
      </div>
    </footer>
  );
}

export default Index;
