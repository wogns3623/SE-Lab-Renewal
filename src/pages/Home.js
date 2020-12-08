import React, { Component } from "react";

import SimpleMap from "component/common/Map.js";
import PageTemplate from "component/common/template/PageTemplate.js";

import "style/Home.scss";

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
              WE LOVE <span>The Greatest professor </span>
            </p>
            <p>
              We service <span>Notice, Members, Courses</span>, etc.
            </p>
            <p>
              This site was made by <span>Kim's Family</span>!
            </p>
          </div>
          <div id="contact">
            <h1>| CONTECT |</h1>
            <div id="contact-container">
              <div id="map-container">
                <h2>Where I am ?</h2>
                <div id="map">
                  <SimpleMap></SimpleMap>
                </div>
              </div>
              <div id="info-container">
                <h2>Information</h2>
                <div id="info">
                  <ul>
                    <hr />
                    <li>
                      <h3>Name</h3>
                      <p>Scott Uk-Jin Lee</p>
                    </li>
                    <hr />
                    <li>
                      <h3>Telephone</h3>
                      <p>031-400-5238</p>
                    </li>
                    <hr />
                    <li>
                      <h3>E-mail</h3>
                      <p>scottlee@hanyang.ac.kr</p>
                    </li>
                    <hr />
                    <li>
                      <h3>Location</h3>
                      <p>
                        Room #620 of the Academic Cluster Support Center
                        <br />
                        at Hanyang Univ. ERICA
                      </p>
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  }
}

export default Home;
