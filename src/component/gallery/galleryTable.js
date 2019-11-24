import React, { Component } from 'react';

class galleryTable extends Component{
    render(){
        return (
            <div className='table'>
                <tr>  
                    <a href={this.props.address}>
                        <img src={this.props.address} alt=''></img><br/>
                        {this.props.title}
                    </a>
                </tr>
            </div>
        );
    }
}

export default galleryTable;