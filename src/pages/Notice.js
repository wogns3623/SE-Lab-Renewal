import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import Row from 'component/notice/Row.js'
import 'style/notice.css';
import { SymbolDef, AST_DWLoop } from 'terser';

class Notice extends Component {
  state = {
    contents:[
      {
        title: 'Title',
        name: 'Name',
        date: 'Date'
      },
      {
        title: '연구원 모집',
        name: 'Scott-Uk-Jin Lee',
        date: '29 Aug 2014'
      },
      {
        title: '2014 PL-SE First Joint Workshop',
        name: 'Scott-Uk-Jin Lee',
        date: '29 Apr 2014'
      },
      {
        title: 'Welcome to SELab Workshop',
        name: 'Scott-Uk-Jin Lee',
        date: '06 Mar 2014'
      }

    ]
  }
   render(){
     return(
      <div> 
        <PageTemplate className='Notice'>
          <h1>NOTICE</h1>
          {[
            this.state.contents.map((x, y) => <Row {...x} key={y}></Row>),
          ]}
          </PageTemplate>
      </div>
     )
   }
}

export default Notice;