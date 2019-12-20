import React, { Component } from "react";

class Input extends Component {
  state = {
    selectedTab: 0
  };
  selectTab = index => {
    this.setState({ selectedTab: index });
  };

  resize = e => {
    console.log(e);
  };
  render() {
    return (
      <section className="Input">
        <div className="resizer" onMouseDown={this.resize}></div>
        <fieldset>
          <legend>
            {["HTML", "CSS", "JS"].map((item, index) => {
              return (
                <div
                  className={`${
                    this.state.selectedTab === index ? " active" : ""
                  }`}
                  onClick={() => this.selectTab(index)}
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </legend>

          {["html", "css", "js"].map((item, index) => {
            return (
              <textarea
                className={`${item}${
                  this.state.selectedTab === index ? " active" : ""
                }`}
                defaultValue={this.props.defaultValue[item]}
                key={index}
              />
            );
          })}
        </fieldset>
      </section>
    );
  }
}

export default Input;
