import React, { Component } from 'react';
import 'style/gallery.css';

class galleryTable extends Component{
    render(){
        return (
            <div className='table'>
                <td>  
                    <a href={this.props.address}>
                        <img src={this.props.address}></img>
                        <br>
                        </br>
                        {this.props.title}
                    </a>
                </td>
            </div>
        );
    }
}

export default galleryTable;