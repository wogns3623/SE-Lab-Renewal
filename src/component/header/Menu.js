import React, { Component } from 'react';

import NavBtn from 'component/header/NavBtn.js';

class MenuItem extends Component {
  static defaultProps = {
    name: "notFound"
  }
  render() {
    return (
      <li className='pull-left'><NavBtn href={this.props.name}></NavBtn></li>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className={'Menu '+this.props.className}>
        <ul className='inline-list menu'>
          {
            this.props.itemList.map(menuName => (
              <MenuItem name={menuName}></MenuItem>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Menu;