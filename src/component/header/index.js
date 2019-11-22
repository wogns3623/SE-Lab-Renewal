import React, { Component } from 'react';

import Menu from 'component/header/NavMenu.js';
import Logo from 'component/header/Logo.js'
import 'style/header.css';

class Header extends Component {
  state = {
    menu: [
      {
        name: 'notice'
      },
      {
        name: 'members'
      },
      {
        name: 'research'
      },
      {
        name: 'publications'
      },
      {
        name: 'courses'
      },
      {
        name: 'gallery'
      },
      {
        name: 'contact'
      },
      {
        name: 'login'
      },
    ]
  }
  render() {
    return (
      <header role='banner'>
        <nav role='navigation'>
          <Logo></Logo>
          <Menu
            className='pull-left'
            items={this.state.menu.slice(0, 6)}></Menu>
          <Menu
            className='pull-right'
              items={this.state.menu.slice(6)}></Menu>

        </nav>
      </header>
    );
  }
}

export default Header;