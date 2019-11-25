import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'style/NavBtn.css'

class NavBtn extends Component {
  static defaultProps = {
    exact: false,
    activeHover: true,
    activeStyle: {
      backgroundColor: '#1a242f',
    }
  }

  render() {
    return (
      <NavLink
        className={'NavBtn' + (this.props.activeHover ? ' activeHover' : '')}
        exact={this.props.exact}
        to={'/'+this.props.name}
        activeStyle={this.props.activeHover ? this.props.activeStyle : {}}>
        {
          this.props.children === undefined
          ? this.props.name.toUpperCase()
          : this.props.children
        }
      </NavLink>
    );
  }
}

export default NavBtn;