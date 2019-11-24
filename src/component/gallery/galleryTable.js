import React, { Component } from 'react';
import 'style/Gallery.css';

class galleryTable extends Component{
    render(){
        return (
            <div className={'Item '+this.props.className}>
                <a href={this.props.address}>
                    <img src={this.props.address}></img>
                    <br>
                    </br>
                    {this.props.title}
                </a>
            </div>
        );
    }
}

export default galleryTable;