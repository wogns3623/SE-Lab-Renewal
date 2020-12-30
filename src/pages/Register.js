import React, { Component } from "react";
import axios from "axios";

import PageTemplate from "component/common/template/PageTemplate.js";
import InputField from "component/user/InputGroup.js";
import { idRegex, pwRegex, emailRegex } from "lib/regex.js";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      pw: "",
      pwCheck: "",
      fname: "",
      lname: "",
      nick: "",
      email: "",
      file: "",
      idWarning: "",
      pwWarning: "",
      pwCheckWarning: "",
      fnameWarning: "",
      lnameWarning: "",
      nickWarning: "",
      emailWarning: "",
      fileWarning: "",
    };

    // this.pwOnBlur = this.pwOnBlur.bind(this); // 콜백 함수 내부에서 사용할 함수가 아니라면 안해줘도 되는듯
    // this.emailOnBlur = this.emailOnBlur.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  idOnBlur = (event) => {
    if (this.state.id) {
      if (idRegex.test(this.state.id)) {
        axios
          .get(`/api/user/checkExist?type=id&value=${this.state.id}`)
          .then((res) => {
            if (!res.data.isExist) this.setState({ idWarning: "" });
            else this.setState({ idWarning: "이미 존재하는 아이디입니다." });
          });
      } else {
        this.setState({
          idWarning:
            "아이디 형식이 틀립니다. 아이디는 6글자 이상의 영문자, 숫자, .등으로 이루어져야 합니다.",
        });
      }
    }
  };

  nickOnBlur = (event) => {
    if (this.state.nick) {
      axios
        .get(`/api/user/checkExist?type=nick&value=${this.state.nick}`)
        .then((res) => {
          if (!res.data.isExist) this.setState({ nickWarning: "" });
          else this.setState({ nickWarning: "이미 존재하는 닉네임입니다." });
        });
    }
  };

  pwOnBlur = (event) => {
    if (this.state.pw) {
      if (pwRegex.test(this.state.pw)) {
        this.setState({ pwWarning: "" });
      } else {
        this.setState({
          pwWarning:
            "비밀번호 형식이 틀립니다. 비밀번호는 8글자 이상의 영문자, 숫자, 특수문자(?!@#$%^&*_=+-)등으로 이루어져야 합니다.",
        });
      }
    }
  };

  pwCheckOnBlur = (event) => {
    if (this.state.pw && this.state.pwCheck) {
      if (this.state.pw === this.state.pwCheck) {
        this.setState({ pwCheckWarning: "" });
      } else {
        this.setState({ pwCheckWarning: "비밀번호가 일치하지 않습니다." });
      }
    }
  };

  emailOnBlur = (event) => {
    if (this.state.email) {
      if (emailRegex.test(this.state.email)) {
        axios
          .get(`/api/user/checkExist?type=email&value=${this.state.email}`)
          .then((res) => {
            if (!res.data.isExist) this.setState({ emailWarning: "" });
            else this.setState({ emailWarning: "이미 존재하는 이메일입니다." });
          });
      } else {
        this.setState({ emailWarning: "이메일 형식이 틀립니다." });
      }
    }
  };

  render() {
    return (
      <PageTemplate className="Register">
        <div id="panel-body">
          <form action="/api/user/register" method="post">
            <h2>register</h2>

            <InputField
              name="id"
              placeholder="id"
              value={this.state.id}
              warning={this.state.id}
              onChange={this.handleChange}
              onBlur={this.idOnBlur}
            />

            <InputField
              name="password"
              placeholder="password"
              type="password"
              value={this.state.pw}
              onChange={this.handleChange}
              onBlur={this.pwOnBlur}
            />

            <InputField
              name="pw_check"
              placeholder="check password"
              type="password"
              value={this.state.pwCheck}
              onChange={this.handleChange}
              onBlur={this.pwCheckOnBlur}
            />

            <InputField
              name="fname"
              placeholder="first name"
              value={this.state.fname}
              onChange={this.handleChange}
            />

            <InputField
              name="lname"
              placeholder="last name"
              value={this.state.lname}
              onChange={this.handleChange}
            />

            <InputField
              name="nick"
              placeholder="nickname"
              value={this.state.nick}
              onChange={this.handleChange}
              onBlur={this.nickOnBlur}
            />

            <InputField
              name="email"
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.emailOnBlur}
            />

            <InputField
              name="profile"
              type="file"
              placeholder="profile image"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.emailOnBlur}
            />

            <button type="submit">register</button>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Register;
