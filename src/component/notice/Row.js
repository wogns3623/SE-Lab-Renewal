import React, { Component } from 'react';

import 'style/Row.css';

class Row extends Component{
    static defaultProps ={
        title: 'Basic Title',
        name: 'Basic Name',
        date: 'Basic Date'
    }
    render(){
        return(
        <div className ="Row">     
            <ul>
                <li className = "title">{this.props.title}</li>
                <li className = "name">{this.props.name}</li>
                <li className = "date">{this.props.date}</li>
            </ul>
        </div>
        )
    }
}

export default Row;