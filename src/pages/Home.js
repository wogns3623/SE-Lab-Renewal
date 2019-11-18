import React, { Component } from 'react';
import styles from '../style/Home.scss';


import PageTamplate from 'component/template/PageTemplate.js';

class Home extends Component {
  render() {
    return (
      <div className={styles.body}>
        <PageTamplate className='Home'>
        </PageTamplate>

        <div>
          It's my home town !
        </div>
      </div>
    );
  }
}

export default Home;