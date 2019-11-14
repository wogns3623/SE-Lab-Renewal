import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Research } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/notice" component={Notice}/>
        <Route path="/members" component={Members}/> */}
        <Route path="/research" component={Research}/>
        {/* <Route path="/publications" component={Publications}/>
        <Route exact path="/courses" component={Courses}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/> */}
      </div>
    );
  }
}

export default App;
