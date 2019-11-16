import React, { Component } from 'react';

import PageTamplate from 'component/template/PageTemplate.js';
import TabTemplate from 'component/template/TabTemplate.js';
import Subject from 'component/research/Subject.js';
import 'style/research.css';

class Research extends Component {
  state = {
    tabList: [
      {
        name: 'Introduction'
      },
      {
        name: 'Project'
      }
    ],
    research: [
      {
        title: 'Web & Web security',
        image: {
          src: 'assets/images/research/web_securitymodified.png',
          alt: 'Internet_Security',
          width: '150px'
        },
        info: [
          'Semantic web',
          'Effective Access Control for Web Data',
          'Vulnerability Analysis and Detection for HTML5',
          'JavaScript and Hybrid Application'
        ]
      },
      {
        title: 'Formal Engineering Methods',
        image: {
          src: 'assets/images/research/formalmethod.png',
          alt: 'Abstract_interpretation',
          width: '200px'
        },
        info: [
          'Formal Specification, Validation, and Verification',
          'Model checking, Theorem Proving',
          'Ontology Reasoning, Constraint Solving'
        ]
      },
      {
        title: 'Requirement Engineering',
        image: {
          src: 'assets/images/research/RE.png',
          alt: 'GeneralRElogo',
          width: '120px'
        },
        info: [
          'Requirement Analysis, Validation and Conflict Detection',
          'Non-Functional Requirements Analysis and Prediction',
          'Product Line and Software Product Line',
          'Requirement Modeling with Extended Mind Map'
        ]
      },
      {
        title: 'Real-Time Software Engineering',
        image: {
          src: 'assets/images/research/Realtime.png',
          alt: 'realtime_construction_software',
          width: '200px'
        },
        info: [
          'Real-Time Software and Process Modeling',
          'Real-Time Software Specification and Verification',
          'Real-Time Software Integration and Migration Control'
        ]
      },
      {
        title: 'Semi-structured Data',
        image: {
          src: 'assets/images/research/XML.png',
          alt: 'xml_icom',
          width: '150px'
        },
        info: [
          'XML and XML DB, Visualization of XML-Schema',
          'Ontology and RDF Store',
          'Semistructured Data Integration and Migration',
          'Optimization of X-Query',
          'Consistency Verification for Semistructured Data Manipulation',
          'Domain Specific Extension to XML & Data Translation from RDBMS to XML DBMS'
        ]
      }
    ]
  }
  render() {
    return (
      <PageTamplate className='Research'>
        <div className='container'>
          <div className='contents'>
            <h1>RESEARCH</h1>
            <TabTemplate tabList={this.state.tabList} research={this.state.research}>
              {[
                this.state.research.map((researchInfo, index) => <Subject {...researchInfo} key={index}></Subject>),
                (<h2 key='0'>공사중</h2>)
              ]}
            </TabTemplate>
          </div>
        </div>
      </PageTamplate>
    );
  }
}

export default Research;