import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import ProfileBox from 'component/members/ProfileBox.js';

import 'style/Members.css';


class Members extends Component {
  state = {
    profiles: [
      {
        image: {
          src: 'assets/images/members/scott.png',
          alt: 'Scott Uk-Jin Lee'
        },
        name: 'Scott Uk-Jin Lee',
        email: 'scottlee@hanyang.ac.kr',
        website: 'TBA',
        career: [
          'an asst. prof. in the CSE Dept. @ HYU (ERICA)',
          'leading this Laboratory!'
        ],
        interestTitle: 'Career',
        interest: [
          '11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea',
          '09 - 11 : Postdoc @ CEA LIST, France',
          '05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ',
          '04 - 04 : Visiting Researcher @ National University of Singapore',
          '04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ',
          '00 - 03 : BE in Software Engineering @ University of Auckland, NZ'
        ]
      },
      {
        image: {
          src: 'assets/images/members/Isma.png',
          alt: 'Isma'
        },
        name: "Isma Farah",
        email: "isma2012@hanyang.ac.kr",
        website: "http://www.linkedin.com/in/ismafarah",
        career: ["PhD scholar From Pakistan on HEC Scholarship"],
        interestTitle: 'Research Interests',
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
            src: 'assets/images/members/Abdul.png',
            alt: 'Abdul'
          },
        name: "Abdul Rahim",
        email: "rahim750413@hanyang.ac.kr",
        website: "https://www.facebook.com/abdul.ariffin",
        career: ["Master's leading to Phd scholar from Kuala Lumpur,Malaysia"],
        interestTitle: 'Research Interests',
        interest: [
        " Software Engineering",
        " -Hadoop(MapReduce)",
        " - Multithreading"
        ]
      },
      {
        image: {
          src: 'assets/images/members/Untitled.jpg',
          alt: 'Asad'
        },
      name: "Asad Abbas",
      email: "asadabbas@hanyang.ac.kr",
      website: "       ",
      career: ["Master's leading to Phd scholar from Kuala Lumpur,Malaysia"],
      interestTitle: 'Research Interests',
      interest: [
      "Software Engineering",
      "-Product Line Software Engineering"
      ]
      },
      {
        image: {
          src: 'assets/images/members/gichan.jpg',
          alt: 'gichan'
        },
      name: "Gichan Lee",
      email: "fantasyopy@gmail.com",
      website: "https://www.linkedin.com/in/GCSELAB",
      career: [
        '2016-2 ~',
        'M.E. to Ph.D.'],
      interestTitle:'Research Interests',
      interest: [
        "Software Engineering in practice",
        "Access Control in IoT environment(project)"
      ]
      },
      {
        image: {
          src: 'assets/images/members/mohsin.jpg',
          alt: 'Mohsin Javaid'
        },
      name: "Mohsin Javaid",
      email: "mohsinjavaid@hanyang.ac.kr",
      website: "https://goo.gl/3QXH6k",
      career: [
        'Ph.D. Scholar from Pakistan on HEC Scholarship.'],
      interestTitle:'Research Interests',
      interest: [
        "Software Engineering",
        "Model Driven Architecture",
        "Internet of Things",
        "Android Application",
        "Requirement Engineering"
      ]
      },
      {
        image: {
          src: 'assets/images/members/11.jpg',
          alt: 'Gayeon Kim'
        },
      name: "Gayeon Kim",
      email: "gayeonkim91@gmail.com",
      website: "  ",
      career: [
        'Hi'],
      interestTitle:'Research Interests',
      interest: [
        "Software Engineering",
        "Web Application",
        "Bigdata analysis"
      ]
      },
      {
        image: {
          src: 'assets/images/members/CAM00259.jpg',
          alt: 'Dahae Sung'
        },
      name: "Dahae Sung",
      email: "sdh4513136@hanmail.net",
      website: "  ",
      career: [
        ':)'],
      interestTitle:'Research Interests',
      interest: [
        " "
      ]
      },
      {
        image: {
          src: 'assets/images/members/jaejin_kim_14032225_원본.jpg',
          alt: 'Jaejin Kim'
        },
      name: "Jaejin Kim",
      email: "jaejinkim@hanyang.ac.kr",
      website: "https://www.facebook.com/musalhk",
      career: [
        '2012 - 1st M.E. in SELAB.',
        '2014 - Software Engineer in Cloud Lab. B2B',
        'Samsung Electronics Mobile Communications Business'
      ],
      interestTitle:'Research Interests',
      interest: [
        "- Access Control in Ubiquitous",
        "- Software Engineering",
        "- IoT Technology (Internet of Things)",
        "- Health & Medical Technology",
        "- Cloud Computing"
      ]
      }
    ]
  }
  
  render() {
    return (
      <PageTemplate className='Members'>
        <h1>MEMBERS</h1>

        <ProfileBox title="Professor" profiles={this.state.profiles.slice(0, 1)}>
        </ProfileBox>
        <ProfileBox title="Ph.D." profiles={this.state.profiles.slice(1,6)}>
        </ProfileBox>
        <ProfileBox title="M.E." profiles={this.state.profiles.slice(6,7)}>
        </ProfileBox>
        <ProfileBox title="Intern" profiles={this.state.profiles.slice(7,8)}>
        </ProfileBox>
        <ProfileBox title="Alumni" profiles={this.state.profiles.slice(8,9)}>
        </ProfileBox>

      </PageTemplate>
    );
  }
} 

export default Members;