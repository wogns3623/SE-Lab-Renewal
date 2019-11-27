import React, { Component } from "react";
import "../style/Home.scss";

import PageTemplate from "component/common/template/PageTemplate.js";

class Home extends Component {
  render() {
    return (
      <PageTemplate className="Home">
        <div className="body">
          <div className="container">
            <h1>
              <img
                src="https://img.icons8.com/ios-filled/100/000000/google-scholar.png"
                alt="icon"
              />
              SELab
            </h1>
            <p>
              Welcome to <span>S</span>oftware <span>E</span>ngineering{" "}
              <span>Lab</span>oratory !
            </p>
            <p>
              I LOVE <span>Scott Uk-Jin Lee</span> professor.
            </p>
            <p>
              We Service <span>Notice, Members, Courses, Login</span>, etc.
            </p>
            <p>
              Please give me a <span>A+</span>!
            </p>
          </div>
          <div id="contact">
            <div id="map"></div>
          </div>
        </div>
      </PageTemplate>
    );
  }
}

export default Home;
