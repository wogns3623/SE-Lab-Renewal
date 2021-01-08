import React, { Component } from "react";

class InputField extends Component {
  static defaultProps = {
    name: "name",
    type: "text",
    placeholder: "",
    value: null,
    warning: "",
    onChange: () => {},
    onBlur: () => {},
  };
  render() {
    if (this.props.value === null) {
      return (
        <div className="InputGroup">
          <input
            type={this.props.type}
            id={this.props.name}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
          <p>{this.props.warning}</p>
        </div>
      );
    } else {
      return (
        <div className="InputGroup">
          <input
            type={this.props.type}
            id={this.props.name}
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
          <p>{this.props.warning}</p>
        </div>
      );
    }
  }
}

export default InputField;
