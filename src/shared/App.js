import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Etc } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/etc" component={Etc}/>
      </div>
    );
  }
}

export default App;
