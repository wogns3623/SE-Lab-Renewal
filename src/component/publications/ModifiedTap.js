import React, { Component } from 'react';

import TabMenu from 'component/tab/TabMenu.js';
import Table from 'component/publications/table.js';
import 'style/Tab.css';

class ModifiedTap extends Component {
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
    if (this.state.currentTab === 0) {
      title = ''
    }

    return (
      <div className={item.name+isActive} key={index}>
        <div className={"title" + title}>
          {item.name}
        </div>
        <ul>
            {[
                item.list.map((ICinfo, index) => <Table {...ICinfo} key={index}></Table>)
            ]}
        </ul>
      </div>
    );
  }

  render() {
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

export default ModifiedTap;