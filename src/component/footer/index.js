import React, { Component } from 'react';

import 'style/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>Ⓒ Copyright 2019 by <a href="https://selab.hanyang.ac.kr">SELab</a>, All Rights Reserved. Computer Science & Engineering, Hanyang Univ. Location: ERICA Support Center (Room #617)</p>
        </div>
      </footer>
    );
  }
}

export default Footer;