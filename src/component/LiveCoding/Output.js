import React, { Component } from "react";

class Output extends Component {
  render() {
    return (
      <section className="Output">
        <iframe className="code" title={this.props.title}></iframe>
        {/* {this.props.children} */}
      </section>
    );
  }
}

export default Output;
