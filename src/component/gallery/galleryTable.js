import React, { Component } from 'react';
import 'style/gallery.css';

class galleryTable extends Component{
    render(){
        return (
            <td>
                <a href={this.props.address}>
                    <img src={this.props.address}></img>
                    <br>
                    </br>
                    {this.props.title}
                </a>
            </td>
        );
    }
}

export default galleryTable;