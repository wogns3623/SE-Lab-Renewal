import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Ⓒ Copyright 2019 by <Link to="/">SELab</Link>, All Rights Reserved. Computer Science & Engineering, Hanyang Univ. Location: ERICA Support Center (Room #617)</p>
      </footer>
    );
  }
}

export default Footer;