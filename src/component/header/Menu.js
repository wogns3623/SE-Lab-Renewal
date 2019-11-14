import React, { Component } from 'react';

import NavBtn from 'component/header/NavBtn.js';

class Menu extends Component {
  fillMenu = () => {
    let menuItems = [];
    for (const item of this.props.list) {
      menuItems.push(<li className='pull-left'><NavBtn href={item}></NavBtn></li>);
    }
    return menuItems;
  }
  
  render() {
    return (
      <div className={'Menu '+this.props.className}>
        <ul className='inline-list menu'>
          {this.fillMenu()}
        </ul>
      </div>
    );
  }
}

export default Menu;