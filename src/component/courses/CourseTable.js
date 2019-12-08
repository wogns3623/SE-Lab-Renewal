import React, { Component } from "react";
import { Link } from "react-router-dom";

import "style/CourseTable.scss";

class CourseTable extends Component {
  currentSemester = {
    year: new Date().getFullYear(),
    semester: Math.floor(new Date().getMonth() / 6 + 1)
  };

  createTable = () => {
    const c = this.currentSemester;
    const sS = this.props.startSemester;
    const sY = this.props.startYear;
    let semesterList = [];
    let infoBody = [];
    let dataHead = [];
    let dataBody = [];

    for (let year = c.year; year >= sY; year--) {
      if (year < c.year || c.semester === 2)
        semesterList.push({ year: year, semester: 2 });
      if (year > sY || sS === 1) semesterList.push({ year: year, semester: 1 });
    }

    dataHead = semesterList.map((item, index) => {
      return <th key={index}>{item.year + "-" + item.semester}</th>;
    });

    this.props.data.courses.map((item, index) => {
      if (JSON.stringify(c) === JSON.stringify(item.activated[0])) {
        infoBody.push(
          <tr key={index} className="active">
            <td colSpan="2" style={{ borderBottom: "none" }}>
              <Link to={`${this.props.match.path}/${item.id}`}>
                <td className="id">{item.id}</td>
                <td className="name">{item.name}</td>
              </Link>
            </td>
          </tr>
        );
      } else {
        infoBody.push(
          <tr key={index}>
            <td className="id">{item.id}</td>
            <td className="name">{item.name}</td>
          </tr>
        );
      }
      let i = 0;
      let dataBodyContents = semesterList.map((semester, j) => {
        if (
          item.activated.length > i &&
          JSON.stringify(semester) === JSON.stringify(item.activated[i])
        ) {
          i++;
          return (
            <td key={j}>
              <div className="circle"></div>
            </td>
          );
        } else {
          return <td key={j}></td>;
        }
      });
      dataBody.push(<tr key={index}>{dataBodyContents}</tr>);
      return 0;
    });

    return [infoBody, dataHead, dataBody];
  };

  render() {
    console.log(this.props);
    let jsx = this.createTable();
    return (
      <div className="Course">
        <h1>{this.props.data.level}</h1>
        <div className="CourseTable">
          <table className="info">
            <thead>
              <tr>
                <th>No.</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>{jsx[0]}</tbody>
          </table>
          <div className="over">
            <table className="data">
              <thead>
                <tr>{jsx[1]}</tr>
              </thead>
              <tbody>{jsx[2]}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseTable;
