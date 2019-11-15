import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'style/navBtn.css'

class NavBtn extends Component {
  static defaultProps = {
    exact: false,
    activeHover: true,
    activeStyle: {
      backgroundColor: '#70c8e9',
    }
  }

  render() {
    return (
      <NavLink
        className={'NavBtn' + (this.props.activeHover ? ' activeHover' : '')}
        exact={this.props.exact}
        to={'/'+this.props.href}
        activeStyle={this.props.activeHover ? this.props.activeStyle : {}}>
        {
          this.props.children === undefined
          ? this.props.href.toUpperCase()
          : this.props.children
        }
      </NavLink>
    );
  }
}

export default NavBtn;