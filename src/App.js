import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
