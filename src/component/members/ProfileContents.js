import React, { Component } from "react";

class ProfileContents extends Component {
  render() {
    return (
      <div className="human">
        <img
          className="photo"
          src={this.props.image.src}
          alt={this.props.image.alt}
        ></img>
        <div className="info">
          <ul>
            <li className="name">{this.props.name}</li>
            <li>{this.props.email}</li>
            <li>
              <a
                href={this.props.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.website}
              </a>
            </li>
            <li>
              {this.props.career.map((career, index) => {
                return (
                  <div key={index}>
                    {career}
                    <br />
                  </div>
                );
              })}
            </li>
          </ul>
        </div>

        <div className="interest">
          <ul>
            <li>{this.props.interestTitle}</li>
            <li>
              {this.props.interest.map((interest, index) => {
                return (
                  <div key={index}>
                    {interest}
                    <br />
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileContents;
