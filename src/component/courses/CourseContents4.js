import React, { Component, Fragment } from "react";

class CourseContents4 extends Component {
  render() {
    return (
      <Fragment>
        <p> {this.props.name} </p>
        <ul>
          {this.props.item.map(item => {
            return (
              <Fragment>
                <li>{item}</li>
              </Fragment>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default CourseContents4;
