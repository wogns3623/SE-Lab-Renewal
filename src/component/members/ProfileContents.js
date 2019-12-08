import React, { Component } from "react";

import gmail from "../../assets/images/gmail.png";

class ProfileContents extends Component {
  render() {
    return (
      <div className="profile-container">
        <img
          className="photo"
          src={this.props.image.src}
          alt={this.props.image.alt}
        />
        <div className="info">
          <ul>
            <li className="name">{this.props.name}</li>
            <li>
              <span className="info-position">{this.props.position}</span>
              {" of "}
              <a
                href={this.props.divisionURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.division}
              </a>
            </li>
            <li>
              {"at "}
              <a
                href="http://www.hanyang.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.work}
              </a>
            </li>
            <li>
              {"Room: "}
              {this.props.location}
            </li>
            <li>
              <a
                href={`mailto:${this.props.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={gmail} alt="gmail" /> {this.props.email}
              </a>
            </li>
            <li>
              <a
                href={this.props.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.website}
              </a>
            </li>
          </ul>
        </div>

        <div className="career interest">
          <ul>
            <li className="career-title interest-title">
              {this.props.interestTitle}
            </li>
            {this.props.interest.map((interest, index) => {
              return <li key={index}>{interest}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileContents;
