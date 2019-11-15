import React, { Component } from 'react';

import 'style/menu.css';

class MenuTemplate extends Component {
  static defaultProps = {
    className: "",
    items: []
  }
  render() {
    return (
      <div className={'Menu '+this.props.className}>
        {
          this.props.items.map((itemName, index) => {
            return (
              <div className='Item' key={index}>
                <this.props.itemComponent name={itemName}>
                </this.props.itemComponent>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default MenuTemplate;