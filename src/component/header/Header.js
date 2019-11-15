import React, { Component } from 'react';

import Menu from 'component/header/NavMenu.js';
import Logo from 'component/header/Logo.js'
import 'style/header.css';

class Header extends Component {
  render() {
    return (
      <header role='banner'>
        <div className='container'>
          <nav role='navigation'>
            <Logo></Logo>
            <Menu
              className='pull-left'
              items={['notice', 'members', 'research', 'publications', 'courses', 'gallery']}></Menu>
            <Menu
              className='pull-right'
               items={['contact', 'login']}></Menu>

          </nav>
        </div>
      </header>
    );
  }
}

export default Header;