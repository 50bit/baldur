import React from 'react';
import './App.scss';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Message from './components/Message';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const history = createBrowserHistory();

  return (
    <div>
      <Router history={history}>
        <Navbar></Navbar>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/message'>
            <Message />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
