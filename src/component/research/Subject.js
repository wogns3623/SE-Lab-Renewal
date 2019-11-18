import React, { Component } from 'react';

import 'style/subject.css';

class Subject extends Component {
  render() {
    
    return (
      <div className='Subject'>
        <h3>{this.props.title}</h3>
        <div className="container">
          <img src={this.props.image.src} width={this.props.image.width} alt={this.props.image.alt}></img>
        </div>
        <ul>
          {this.props.info.map((info, index) => (<li  key={index}>{info}</li>))}
        </ul>
        <br></br>
      </div>
    );
  }
}

export default Subject;