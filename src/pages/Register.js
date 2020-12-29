import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";

class Login extends Component {
  render() {
    return (
      <PageTemplate className="Register">
        <div id="panel-body">
          <form action="/api/user/register" method="post">
            <h2>register</h2>

            <div>
              <label for="id">ID</label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="id"
                onBlur={this.idBlur}
              />
            </div>

            <div>
              <label for="nick">NICKNAME</label>
              <input type="text" id="nick" name="nick" placeholder="nickname" />
            </div>

            <div>
              <label for="pw">PASSWORD</label>
              <input type="password" id="pw" name="pw" placeholder="password" />
              <input
                type="password"
                id="pw_ckeck"
                name="pw_check"
                placeholder="check password"
              />
            </div>

            <div>
              <label for="name">NAME</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="first name"
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="last name"
              />
            </div>

            <div>
              <label for="email">EMAIL</label>
              <input type="email" id="email" name="email" placeholder="email" />
            </div>

            <div>
              <label for="profile">PROFILE IMAGE</label>
              <input
                type="file"
                id="profile"
                name="profile"
                placeholder="profile image"
              />
            </div>

            <button type="submit">register</button>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Login;
