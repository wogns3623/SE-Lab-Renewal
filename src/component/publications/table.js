import React, { Component } from 'react';
import { PassThrough } from 'stream';
import 'style/Publications.css'


class Table extends Component{
    render(){
        return (
            <div className='list'>
                <li>  
                    <a href={this.props.address}>
                        {this.props.title}
                    </a>
                </li>
            </div>
        );
    }
}

export default Table;