import React, { Component } from 'react';

import 'style/row.css';

class Row extends Component{
    static defaultProps ={
        title: 'Basic Title',
        name: 'Basic Name',
        date: 'Basic Date'
    }
    render(){
        return(
            <div className ="Row">
                <div className="contents">  
                    <ul>
                        <li>{this.props.title}</li>
                        <li>{this.props.name}</li>
                        <li>{this.props.date}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Row;