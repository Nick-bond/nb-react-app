import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

function Index() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="footer-description">
        <div className="footer-description_inner">©Food Market 2020</div>
      </div>
    </footer>
  );
}

export default Index;
