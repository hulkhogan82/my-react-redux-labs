import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PickSeats } from './components/PickSeats';
import { Checkout } from './components/Checkout';
import { FilmDetails } from './components/FilmDetails';
import { LandingPage } from './components/LandingPage';

import { useState, useEffect } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';
import { NotFound } from './components/NotFound';
import { Account } from './Authentication/Account';
import { Login } from './Authentication/Login';

import'material-design-lite/dist/material.min.css';
import'material-design-lite/dist/material.purple-indigo.min.css';

function App() {

  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
  }, []);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <a href="/account" className="mdl-layout__tab">My account</a>
                  <a href="/logout" className="mdl-layout__tab">logout</a>
                  <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
                  <a href="/login" className="mdl-layout__tab">Login</a>
                  <a href="/register" className="mdl-layout__tab">Register</a>
                </nav>
              </div>
            </header>
            <div className="mdl-layout__drawer">
              <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
              <nav className="mdl-navigation">
                <a href="/account" className="mdl-layout__link">My account</a>
                <a href="/logout" className="mdl-layout__link">logout</a>
                <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
                <a href="/login" className="mdl-layout__link">Login</a>
                <a href="/register" className="mdl-layout__link">Register</a>
              </nav>
            </div>
            <main className="mdl-layout__content">
              <Account></Account>
              <Login></Login>
            </main>
            <footer>
            </footer>
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
