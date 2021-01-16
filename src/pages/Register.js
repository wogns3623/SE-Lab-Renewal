import React, { Component } from "react";
import axios from "axios";

import PageTemplate from "component/common/template/PageTemplate.js";
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
      perm: 0,
      idWarning: "",
      pwWarning: "",
      pwCheckWarning: "",
      nameWarning: "",
      nickWarning: "",
      emailWarning: "",
      profileSrc: "some default src",
    };

    this.profileInput = React.createRef();
    // this.pwOnBlur = this.pwOnBlur.bind(this); // 콜백 함수 내부에서 사용할 함수가 아니라면 안해줘도 되는듯
    // this.emailOnBlur = this.emailOnBlur.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let s = this.state;
    if (s.id && s.pw && s.pwCheck && s.fname && s.lname && s.nick && s.email) {
      if (
        !s.idWarning &&
        !s.pwWarning &&
        !s.pwCheckWarning &&
        !s.nameWarning &&
        !s.nickWarning &&
        !s.emailWarning
      ) {
        let formData = new FormData(event.target);
        formData.delete("pwCheck");

        // for (const iterator of formData.entries()) console.log(iterator);

        axios
          .post("/api/user/register", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            console.log(this.props.history);
            this.props.history.push("", "", "/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("잘못된 값이 있습니다.");
      }
    } else {
      alert("비어있는 값이 있습니다.");
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleProfileChange = (event) => {
    let fileList = this.profileInput.current.files;
    if (fileList && fileList[0]) {
      let file = fileList[0];
      // let file = event.target.files[0];
      // Todo: 둘중에 무엇을 쓰는게 더 바람직한가
      let reader = new FileReader();

      reader.onload = (e) => {
        this.setState({ profileSrc: e.target.result });
        // this.setState({ profileSrc: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  idOnBlur = (event) => {
    if (this.state.id) {
      if (idRegex.test(this.state.id)) {
        axios
          .get(`/api/user/checkExist?type=id&value=${this.state.id}`)
          .then((res) => {
            if (!res.data.isExist) this.setState({ idWarning: "" });
            else this.setState({ idWarning: "이미 존재하는 아이디입니다." });
          })
          .catch((err) => {
            this.setState({
              idWarning:
                "알수 없는 오류가 발생했습니다. 이후에 다시 시도해주십시오.",
            });
          });
      } else {
        this.setState({
          idWarning:
            "아이디 형식이 틀립니다.\n아이디는 6글자 이상의 영문자, 숫자, .등으로 이루어져야 합니다.",
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
        })
        .catch((err) => {
          this.setState({
            nickWarning:
              "알수 없는 오류가 발생했습니다. 이후에 다시 시도해주십시오.",
          });
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
            "비밀번호 형식이 틀립니다. 비밀번호는 8글자 이상의 영문자, 숫자, 특수문자(?!@#$%^&*_=+-)등을 포함해야 합니다.",
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
          })
          .catch((err) => {
            this.setState({
              emailWarning:
                "알수 없는 오류가 발생했습니다. 이후에 다시 시도해주십시오.",
            });
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
          <form onSubmit={this.handleSubmit}>
            <h2>register</h2>

            <div className="InputGroup">
              <input
                type="text"
                name="id"
                placeholder="id"
                value={this.state.id}
                onChange={this.handleChange}
                onBlur={this.idOnBlur}
              />
              <p>{this.state.idWarning}</p>
            </div>

            <div className="InputGroup">
              <input
                type="password"
                name="pw"
                placeholder="pw"
                value={this.state.pw}
                onChange={this.handleChange}
                onBlur={this.pwOnBlur}
              />
              <p>{this.state.pwWarning}</p>
            </div>

            <div className="InputGroup">
              <input
                type="password"
                name="pwCheck"
                placeholder="check password"
                value={this.state.pwCheck}
                onChange={this.handleChange}
                onBlur={this.pwCheckOnBlur}
              />
              <p>{this.state.pwCheckWarning}</p>
            </div>

            <div className="InputGroup">
              <input
                type="text"
                name="fname"
                placeholder="first name"
                value={this.state.fname}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lname"
                placeholder="last name"
                value={this.state.lname}
                onChange={this.handleChange}
              />
              <p>{this.state.nameWarning}</p>
            </div>

            <div className="InputGroup">
              <input
                type="text"
                name="nick"
                placeholder="nickname"
                value={this.state.nick}
                onChange={this.handleChange}
                onBlur={this.nickOnBlur}
              />
              <p>{this.state.nickWarning}</p>
            </div>

            <div className="InputGroup">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.emailOnBlur}
              />
              <p>{this.state.emailWarning}</p>
            </div>

            <div className="InputGroup" id="profile">
              <input
                type="file"
                name="profile"
                placeholder="profile image"
                accept="image/*"
                ref={this.profileInput}
                onChange={this.handleProfileChange}
              />
              <img
                src={this.state.profileSrc}
                alt="your profile"
                id="profile_tmp"
              />
            </div>

            <div className="InputGroup">
              <input
                type="radio"
                id="perm0"
                name="perm"
                value="0"
                defaultChecked
                onChange={this.handleChange}
              />
              <label htmlFor="perm0">student</label>

              <input
                type="radio"
                id="perm1"
                name="perm"
                value="1"
                onChange={this.handleChange}
              />
              <label htmlFor="perm1">dobby</label>

              <input
                type="radio"
                id="perm2"
                name="perm"
                value="2"
                onChange={this.handleChange}
              />
              <label htmlFor="perm2">professor</label>
            </div>

            <button type="submit">register</button>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Register;
