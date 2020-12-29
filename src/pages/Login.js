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

            <div>
              <label for="id" class="sr-only">
                ID
              </label>
              <input type="text" id="id" name="id" placeholder="id" />
            </div>

            <div>
              <label for="pw" class="sr-only">
                PASSWORD
              </label>
              <input type="password" id="pw" name="pw" placeholder="password" />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Login;
