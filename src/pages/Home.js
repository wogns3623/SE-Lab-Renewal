import React, { Component, Fragment } from 'react';
import Header from 'component/header/Header.js';

class Home extends Component {
  render() {
     return (
      <Fragment>
        <Header></Header>
        <main>
          <h1>
            Home
          </h1>
        </main>
      </Fragment>
     );
  }
}

export default Home;