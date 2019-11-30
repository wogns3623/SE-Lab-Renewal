import React, { Component } from "react";

import ProfileContents from "component/members/ProfileContents.js";

class ProfileBox extends Component {
  render() {
    return (
      <div className="position">
        <div id="title_wrapper">
          <h2>{this.props.title}</h2>
        </div>

        {this.props.profiles.map((profile, index) => {
          return <ProfileContents {...profile} key={index}></ProfileContents>;
        })}
      </div>
    );
  }
}

export default ProfileBox;
