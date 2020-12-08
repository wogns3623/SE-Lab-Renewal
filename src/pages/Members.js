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
          alt: "Scott Uk-Jin Lee",
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
          "leading this Laboratory!",
        ],
        interestTitle: "Career",
        interest: [
          "2011 ~      : Assistant Professor in CSE Dept. @ Hanyang University, Korea",
          "2009 ~ 2011 : Postdoc @ CEA LIST, France",
          "2005 ~ 2006 : SE Programmer in SE Dept. @ University of Auckland, NZ",
          "2004 ~ 2004 : Visiting Researcher @ National University of Singapore",
          "2004 ~ 2008 : Ph.D in Computer Science @ University of Auckland, NZ",
          "2000 ~ 2003 : BE in Software Engineering @ University of Auckland, NZ",
        ],
      },
      {
        name: "Isma Farah",
        image: {
          src: "assets/images/members/Isma.png",
          alt: "Isma",
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
          "Formal Methods",
        ],
      },
      {
        name: "Abdul Rahim",
        image: {
          src: "assets/images/members/Abdul.png",
          alt: "Untitled",
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
          "Multithreading",
        ],
      },
      {
        name: "Asad Abbas",
        image: {
          src: "assets/images/members/Untitled.jpg",
          alt: "Untitled",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "asadabbas@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: ["Software Engineering", "Product Line Software Engineering"],
      },
      {
        name: "Gichan Lee",
        image: {
          src: "assets/images/members/gichan.jpg",
          alt: "gichan",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "fantasyopy@gmail.com",
        location: "Cluster. Rm#621",
        website: "https://www.linkedin.com/in/GCSELAB",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering in practice",
          "Access Control in IoT environment(project)",
        ],
      },
      {
        name: "Mohsin Javaid",
        image: {
          src: "assets/images/members/mohsin.jpg",
          alt: "mohsin",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "mohsinjavaid@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: "https://goo.gl/3QXH6k",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Model Driven Architecture",
          "Internet of Things",
          "Android Application",
          "Requirement Engineering",
        ],
      },
      {
        name: "Muhammad Umair Khan",
        image: {
          src: "assets/images/members/khan.jpg",
          alt: "muhammad umair khan",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "mumairkhan@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: "https://goo.gl/GdYteF",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Concurrent Programming",
          "Internet of Thing",
        ],
      },
      {
        name: "Gayeon Kim",
        image: {
          src: "assets/images/members/11.jpg",
          alt: "gayeon Kim",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "gayeonkim91@gmail.com",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Web Application",
          "Bigdata analysis",
        ],
      },
      {
        name: "Wu Zhiqiang",
        image: {
          src: "assets/images/members/325115318014822206.jpg",
          alt: "wu zhiqiang",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "hhhwwwuuu@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software engineering",
          "Concurrency Detection",
          "Malware Detection",
        ],
      },
      {
        name: "Gwanggyu Choi",
        image: {
          src: "assets/images/members/gif.gif",
          alt: "gwanggyu choi",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "gcahmoei@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: ["Software engineering", "requirement engineering"],
      },
      {
        name: "Hyunglak Kim",
        image: {
          src: "assets/images/members/140x175.jpg",
          alt: "hyunglak kim",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "jikuaij@gmail.com",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "Crowdsourcing Software Develop",
          "Android Application",
          "Model Checking",
        ],
      },
      {
        name: "Dahae Sung",
        image: {
          src: "assets/images/members/CAM00259.jpg",
          alt: "dahae sung",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "sdh4513136@hanmail.net",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [],
      },
      {
        name: "Yongtaek Oh",
        image: {
          src: "http://placehold.it/140x175",
          alt: "yongtaek oh",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "ka123ak1@gmail.com",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: ["Iot"],
      },
      {
        name: "Namju Park",
        image: {
          src: "http://placehold.it/140x175",
          alt: "namju park",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "qkrska66@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [],
      },
      {
        name: "Jiang Hua",
        image: {
          src: "assets/images/members/1.jpg",
          alt: "jiang hua",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "jh19880208@163.com",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: ["Requirement Engineering"],
      },
      {
        name: "Jaeho Choi",
        image: {
          src: "assets/images/members/IMG_2242.JPG",
          alt: "",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "jaeho34@hanyang.ac.kr",
        location: "Cluster. Rm#621",
        website: "http://www.facebook.com/rogue9071",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [
          "Software Engineering",
          "A field of Access Control(XACML tools)",
          "Web Application & Security",
          "Cloud Computing Evironment",
          "Social Network Service",
        ],
      },
      {
        name: "Geunhwan Park",
        image: {
          src: "assets/images/members/IMG_0889.jpg",
          alt: "",
        },
        position: "Doctor of Philosophy",
        division: "SELab",
        divisionURL: "http://selab.hanyang.ac.kr",
        work: "Hanyang University, ERICA",
        email: "0101d8cf@gmail.com",
        location: "Cluster. Rm#621",
        website: " ",
        career: [" "],
        interestTitle: "Research Interests",
        interest: [],
      },
    ],
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
          profiles={this.state.profiles.slice(1, 7)}
        ></ProfileBox>
        <ProfileBox
          title="M.E."
          profiles={this.state.profiles.slice(7, 11)}
        ></ProfileBox>
        <ProfileBox
          title="Interen"
          profiles={this.state.profiles.slice(11, 14)}
        ></ProfileBox>
        <ProfileBox
          title="Alumni"
          profiles={this.state.profiles.slice(14, 17)}
        ></ProfileBox>
      </PageTemplate>
    );
  }
}

export default Members;
