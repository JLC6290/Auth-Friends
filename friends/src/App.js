import React from 'react';
import './App.css';

import { Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Friends from "./components/Friends"
import PrivateRoute from "./components/ProtectedRoute"

function App() {
  return (

      <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
          </nav>

          <PrivateRoute exact path="/friends" component={Friends} />
          <Route exact path="/" />
          <Route path="/login" component={Login} />
 
        <footer />
      </div>
  );
}

export default App;
