import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
