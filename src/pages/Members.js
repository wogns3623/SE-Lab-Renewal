import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";
import ProfileBox from "component/members/ProfileBox.js";

import "style/Members.css";

class Members extends Component {
  state = {
    profiles: [
      {
        image: {
          src: "assets/images/members/scott.png",
          alt: "Scott Uk-Jin Lee"
        },
        name: "Scott Uk-Jin Lee",
        email: "scottlee@hanyang.ac.kr",
        website: "TBA",
        career: [
          "an asst. prof. in the CSE Dept. @ HYU (ERICA)",
          "leading this Laboratory!"
        ],
        interestTitle: "Career",
        interest: [
          "11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea",
          "09 - 11 : Postdoc @ CEA LIST, France",
          "05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ",
          "04 - 04 : Visiting Researcher @ National University of Singapore",
          "04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ",
          "00 - 03 : BE in Software Engineering @ University of Auckland, NZ"
        ]
      },
      {
        image: {
          src: "assets/images/members/Isma.png",
          alt: "Isma"
        },
        name: "Isma Farah",
        email: "isma2012@hanyang.ac.kr",
        website: "http://www.linkedin.com/in/ismafarah",
        career: ["PhD scholar From Pakistan on HEC Scholarship"],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Web Applications",
          "Semantic Web",
          "Database Management",
          "Formal Methods"
        ]
      },
      {
        image: {
          src: "assets/images/members/Abdul.png",
          alt: "Untitled"
        },
        name: "Abdul Rahim",
        email: "rahim750413@hanyang.ac.kr",
        website: "https://www.facebook.com/abdul.ariffin",
        career: ["Master's leading to Phd scholar from Kuala Lumpur,Malaysia"],
        interestTitle: "Research Interests",
        interest: [
          " Software Engineering",
          " -Hadoop(MapReduce)",
          " - Multithreading"
        ]
      }
    ]
  };

  render() {
    return (
      <PageTemplate className="Members">
        <h1>MEMBERS</h1>

        <ProfileBox
          title="Professor"
          profiles={this.state.profiles.slice(0, 1)}
        ></ProfileBox>
        <ProfileBox
          title="Ph.D."
          profiles={this.state.profiles.slice(1)}
        ></ProfileBox>
      </PageTemplate>
    );
  }
}

export default Members;
