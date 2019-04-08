import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from '../src/components/layout/Landing';
import Navbar from '../src/components/layout/Navbar';
import Register from '../src/components/auth/Register';
import Login from '../src/components/auth/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
