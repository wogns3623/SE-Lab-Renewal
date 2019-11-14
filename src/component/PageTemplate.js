import React, { Component, Fragment } from 'react';
import Header from 'component/header/Header.js';
import Footer from 'component/footer/Footer.js';
import ErrorContent from 'component/ErrorContent.js';

class PageTemplate extends Component {
  render() {
    return (
    <Fragment>
      <Header></Header>
      <main className={this.props.className}>
        {
          this.props.children === undefined
          ? (<ErrorContent></ErrorContent>)
          : this.props.children
        }
      </main>
      <Footer></Footer>
    </Fragment>
    );
  }
}

export default PageTemplate;