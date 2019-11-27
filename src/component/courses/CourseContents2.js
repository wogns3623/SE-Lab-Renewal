import React, { Component, Fragment } from "react";

class CourseContents2 extends Component {
  render() {
    return (
      <Fragment>
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

export default CourseContents2;
