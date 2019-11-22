import React, { Component } from 'react';

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