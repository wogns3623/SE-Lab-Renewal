import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";
import ProfileBox from "component/members/ProfileBox.js";

import "style/Members.scss";

class Members extends Component {
  state = {
    profiles: [
      {
        name: "Scott Uk-Jin Lee",
        image: {
          src: "assets/images/members/scott.png",
          alt: "Scott Uk-Jin Lee"
        },
        position: "Associate Professor",
        division: "Division of Computer Science",
        divisionURL: "https://sw.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "scottlee@hanyang.ac.kr",
        website: "https://selab.hanyang.ac.kr",
        location: "Cluster. Rm#620",
        career: [
          "an asst. prof. in the CSE Dept. @ HYU (ERICA)",
          "leading this Laboratory!"
        ],
        interestTitle: "Career",
        interest: [
          "2011 ~      : Assistant Professor in CSE Dept. @ Hanyang University, Korea",
          "2009 ~ 2011 : Postdoc @ CEA LIST, France",
          "2005 ~ 2006 : SE Programmer in SE Dept. @ University of Auckland, NZ",
          "2004 ~ 2004 : Visiting Researcher @ National University of Singapore",
          "2004 ~ 2008 : Ph.D in Computer Science @ University of Auckland, NZ",
          "2000 ~ 2003 : BE in Software Engineering @ University of Auckland, NZ"
        ]
      },
      {
        name: "Isma Farah",
        image: {
          src: "assets/images/members/Isma.png",
          alt: "Isma"
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "isma2012@hanyang.ac.kr",
        location: "Cluster. Rm#621",
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
        name: "Abdul Rahim",
        image: {
          src: "assets/images/members/Abdul.png",
          alt: "Untitled"
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "rahim750413@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: "https://www.facebook.com/abdul.ariffin",
        career: ["Master's leading to Phd scholar from Kuala Lumpur,Malaysia"],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Hadoop(MapReduce)",
          "Multithreading"
        ]
      }
    ]
  };

  render() {
    return (
      <PageTemplate className="Members">
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
