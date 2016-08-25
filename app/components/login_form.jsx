import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class LoginForm extends Component {

  handleFormSubmit({email, password}) {
    console.log(email, password);
  }

  render() {

    const { handleSubmit, fields: {email, password} } = this.props;

    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit(this.handleFormSubmit).bind(this)}>
            <div className="row">
              <div className="input-field col s12">
                <input {...email} id="email" type="email" className="validate" />
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input {...password} id="password" type="password" className="validate" />
                <label>Password</label>
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

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm);
