import React, { Component } from 'react';
import '../style/Home.scss';

import PageTamplate from 'component/template/PageTemplate.js';

class Home extends Component {
  render() {
    return (
      <PageTamplate className='Home'>
        <div className='body'>
          It's my home town !
        </div>
      </PageTamplate>
    );
  }
}

export default Home;