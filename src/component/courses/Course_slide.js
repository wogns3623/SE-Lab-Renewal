import React, { Component } from "react";

import "style/Course_slide.css";

class Course_slide extends Component {
  render() {
    return (
      <tr>
        <th className="number">{this.props.index}</th>
        <td className="cont">{this.props.Lec}</td>
      </tr>
    );
  }
}

export default Course_slide;
