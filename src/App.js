import React, { Component } from 'react';
import Login from './components/login';
import Home from './components/home';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
        return (    
    <div>             
    <Router>
        <Route exact path="/" component={Login} /> 
        <Route path="/home" component={Home} />
    </Router>   
    </div>     
        );
    }
}

export default App;