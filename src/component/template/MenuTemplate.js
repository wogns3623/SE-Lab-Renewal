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
          this.props.items.map((itemInfo, index) => {
            return (
              <div className='Item' key={index}>
                <this.props.itemComponent {...itemInfo}>
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