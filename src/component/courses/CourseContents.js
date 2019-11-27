import React, { Component, Fragment } from "react";

class CourseContents extends Component {
  render() {
    return (
      <Fragment>
        <p>{this.props.explain}</p>
        <ol>
          <li>
            {this.props.list.map(list => {
              return (
                <Fragment>
                  {list}
                  <br />
                </Fragment>
              );
            })}
          </li>
        </ol>
      </Fragment>
    );
  }
}

export default CourseContents;
