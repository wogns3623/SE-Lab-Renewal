import React, { Component } from 'react';

import TabMenu from 'component/tab/TabMenu.js';
import 'style/tab.css';
import GalleryTable from 'component/gallery/galleryTable.js';

class GalleryTab extends Component {
  state = {
    currentTab: 0,
  }

  selectTab = (index) => {
    this.setState({
      currentTab: index
    })
  }



  disable = (item, index) =>{
    index = index + 1;
    console.log(this.state.currentTab, index)
    let isActive = ' deactive';
    let title = ' deactive';
    if(this.state.currentTab===index || this.state.currentTab===0){
      isActive = '';
    }
    // if (this.state.currentTab === 0) {
    //   title = ''
    // }

    return (
      <div className={item.name+isActive} key={index}>
        <div className={"title" + title}>
          {item.name}
        </div>
        <tr>
            {[
                item.list.map((ICinfo, index) => <GalleryTable {...ICinfo} key={index}></GalleryTable>)
            ]}
        </tr>
      </div>
    );
  }

  render() {
      console.log(this.props.tabList)
    return (
      <div className='Tab'>
        <TabMenu items={this.props.tabList.map((tab, index) => {
            tab.className = this.state.currentTab!==index?tab.name+' deactive':tab.name
            return tab
          })}
          onClickFunc={this.selectTab}>
        </TabMenu>

        <div id='hl'></div>

        <div className="Contents">
          {this.props.contents.map(this.disable)}
        </div>
      </div>
    );
  }
}

export default GalleryTab;