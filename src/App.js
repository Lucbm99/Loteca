import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';
import Classification from './components/classification';
import Games from './components/games';
import Profile from './components/profile';
import EditProfile from './components/edit-profile';

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
        <Route exact path="/classification">
          <Classification />
        </Route>
        <Route exact path="/games">
          <Games />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/edit-profile">
          <EditProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
