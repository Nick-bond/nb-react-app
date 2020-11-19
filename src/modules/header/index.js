import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

function Index() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Index;
