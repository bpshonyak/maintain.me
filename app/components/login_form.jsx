import React, { Component } from 'react';

class LoginForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    //TODO: Handle submittion
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label>Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label>Email</label>
              </div>
            </div>
            <div>
              <button className="btn waves-effect waves-light blue darken-3" type="submit" name="action">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
