import React, { Component } from "react";

class InputField extends Component {
  static defaultProps = {
    name: "name",
    type: "text",
    placeholder: "",
    value: "",
    onBlur: () => {},
  };
  render() {
    return (
      <div className="InputGroup">
        <input
          type={this.props.type}
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onBlur={this.props.onBlur}
        />
      </div>
    );
  }
}

export default InputField;
