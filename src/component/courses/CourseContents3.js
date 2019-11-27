import React, { Component, Fragment } from "react";

class CourseContents3 extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          <li>
            {" "}
            {this.props.name}
            <ul>
              {this.props.item.map(item => {
                return (
                  <Fragment>
                    <li>{item}</li>
                  </Fragment>
                );
              })}
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default CourseContents3;
