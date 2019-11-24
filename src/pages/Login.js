import React, { Component } from 'react';

import '../style/Login.scss';
import PageTemplate from 'component/template/PageTemplate.js';

class Login extends Component {
  render() {
    return (
      <PageTemplate className='Login'>
        <div id="panel-body">
          <form>
            <h2>Login</h2>
            This is LOGIN !
            <div className="input-group">
              <span className="glyphicon">
                아
              </span>
              <label for="email" class="sr-only">Email</label>
              <input type="text" id="email" className="form-control" placeholder="Email" autocomplete="off" />
            </div>
            <div className="input-group">
              <span className="glyphicon">
                아
              </span>
            </div>
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default Login;