import React, { Component, Fragment } from 'react';

class ProfileContents extends Component {
    render() {
        return(
            <div className="human">
                <img className="photo" src={this.props.image.src} alt={this.props.image.alt}></img>
                <div id="info">
                <ul>
                    <li className="name">{this.props.name}</li>
                    <li>{this.props.email}</li>
                    <li><a href={this.props.website} target="_blank">{this.props.website}</a></li>
                    <li>
                         {this.props.career.map((career) => {
                            return(<Fragment>{career}<br/></Fragment>);
                        })}
                    </li>
                </ul>
                </div>

                <div id="interest">
                <ul>
                    <li>{this.props.interestTitle}</li>
                    <li>
                        {this.props.interest.map((interest) => {
                            return(<Fragment>{interest}<br/></Fragment>);
                        })}
                    </li>
                </ul>
                </div>
            </div> 
        );
    }
}

export default ProfileContents;