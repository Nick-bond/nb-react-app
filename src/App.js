import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import Header from './modules/header';
import Footer from './modules/footer';
import { MainProvider } from './modules/provider';
import './App.css';

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <MainProvider>
        <Header />
        <div className="app">{routes}</div>
        <Footer />
      </MainProvider>
    </Router>
  );
}

export default App;
