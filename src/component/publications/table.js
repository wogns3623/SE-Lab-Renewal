import React, { Component } from 'react';
import { PassThrough } from 'stream';



class Table extends Component{
    render(){
        return (
            <li>  
                <a href={this.props.address}>
                    {this.props.title}
                </a>
            </li>
        );
    }
}

export default Table;