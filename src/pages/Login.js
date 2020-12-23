import React, { Component } from "react";

import "style/Login.scss";
import PageTemplate from "component/common/template/PageTemplate.js";

class Login extends Component {
  render() {
    return (
      <PageTemplate className="Login">
        <div id="panel-body">
          <form action="/api/user/login" method="post">
            <h2>Login</h2>
            This is LOGIN !
            <div className="input-group">
              <label for="id" class="sr-only">
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                className="form-control"
                placeholder="id"
                autocomplete="off"
              />
            </div>
            <div className="input-group">
              <label for="pw" class="sr-only">
                PASSWORD
              </label>
              <input
                type="text"
                id="pw"
                name="pw"
                className="form-control"
                placeholder="password"
                autocomplete="off"
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Login;
