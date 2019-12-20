import React, { Component } from "react";

import "style/CourseSlide.scss";
import { Link } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <tr>
        {/* todo: slide 페이지로 이동되는 링크 추가 */}
        <th className="number">{this.props.index}</th>
        <td className="cont">
          <Link to="/slide">{this.props.Lec}</Link>
        </td>
      </tr>
    );
  }
}

class SlideList extends Component {
  lcontent = [
    {
      Lec: "Introduction"
    },
    {
      Lec: "The Internet & World Wide Web"
    },
    {
      Lec: "Basic HTML"
    },
    {
      Lec: "CSS for Styling"
    }
  ];

  rcontent = [
    {
      Lec: "Introduction - Week 3"
    },
    {
      Lec: "About Me (HTML) - Week 4"
    },
    {
      Lec: "CSS - Week 5"
    },
    {
      Lec: "CSS Design & Layout - Week 6"
    }
  ];

  render() {
    return (
      <div className="SlideSelect">
        <table>
          <thead>
            <th>NO.</th>
            <th>Lecture Slides</th>
          </thead>
          <tbody>
            {[
              this.lcontent.map((item, index) => {
                return <Item {...item} index={index} key={index}></Item>;
              })
            ]}
          </tbody>
        </table>
        <table>
          <thead>
            <th>NO.</th>
            <th>Labs</th>
          </thead>
          <tbody>
            {[
              this.rcontent.map((item, index) => {
                return <Item {...item} index={index} key={index}></Item>;
              })
            ]}
          </tbody>
        </table>
      </div>
    );
  }
}
export default SlideList;
