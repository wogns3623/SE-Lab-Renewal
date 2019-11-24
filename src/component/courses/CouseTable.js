import React, { Component } from 'react';

class CourseTable extends Component{
  render() {
    const currentSemester = {
      year: (new Date()).getFullYear(),
      semester: Math.floor(((new Date()).getMonth()/6)+1)
    }
    console.log(this.props.data);
    return(
      <div className="CourseTable">
          <table className="info">
            <thead>
              <tr>
                <th colSpan="2">{this.props.data.level}</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.courses.map((item, index) => (
                <tr key={index} {...((item.activated[0]===currentSemester)?{className:'active'}:{})}>
                  <td className="id">{item.id}</td>
                  <td className="name">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="over">
            <table className="second_table">
              <thead>
                <tr>
                  <th>2019-2</th>
                  <th>2019-1</th>
                  <th>2018-1</th>
                  <th>2017-2</th>
                  <th>2017-1</th>
                  <th>2016-2</th>
                  <th>2016-1</th>
                  <th>2015-2</th>
                  <th>2015-1</th>
                  <th>2014-2</th>
                  <th>2014-1</th>
                  <th>2013-2</th>
                  <th>2013-1</th>
                  <th>2012-2</th>
                  <th>2012-1</th>
                  <th>2011-2</th>
                </tr>
              </thead>
              <tbody>
                {/* Logical */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                </tr>
                {/* Programming Fundamentals */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                </tr>
                {/* Web */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                {/*  Web App  */}
                <tr>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* SE */}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="circle"></div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default CourseTable;