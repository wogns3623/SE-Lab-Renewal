import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import GalleryTab from 'component/gallery/GalleryTab.js';


class Gallery extends Component {

  state = {
    tabList: [
      {name: 'All'},
      {name: 'Social Activity'},
      {name: 'Conference'},
      {name: 'Etc'},
    ],
    ALL:[
      {
        name: "Social Activity",
        list: [
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'},
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'}
        ]
      },
      {
        name: "Conference",
        list: [
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'},
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'}
        ]
      },
      {
        name: "Etc",
        list: [
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'},
          {title: '회식',
          address: 'https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg'}
        ]
      } 
    ]
  }

  render() {
    console.log(this.state.tabList)
    return (
      <PageTemplate className='Gallery'>
        <div>
          <h1>
            Gallery
          </h1>
          <GalleryTab tabList={this.state.tabList} contents = {this.state.ALL}>
          </GalleryTab>
        </div>
      </PageTemplate>
    );
  }
}

export default Gallery;