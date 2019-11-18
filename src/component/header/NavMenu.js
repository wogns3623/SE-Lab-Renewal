import React, { Component } from 'react';

import MenuTemplate from 'component/template/MenuTemplate.js';
import NavBtn from 'component/header/NavBtn.js';

class NavMenu extends Component {
  render() {
    return (
      <MenuTemplate
        className={'NavMenu '+this.props.className}
        items={this.props.items} itemComponent={NavBtn}>
      </MenuTemplate>
    );
  }
}

export default NavMenu;