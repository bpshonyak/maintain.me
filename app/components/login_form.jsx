import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from './../actions';

class LoginForm extends Component {

  handleFormSubmit({email, password}) {
    this.props.logInUser({email, password});
  }

  renderAlert() {
    if (this.props.errorMsg)
      return (
        <div className="row">
          <label className="red-text text-darken-2">
            <strong>{this.props.errorMsg}</strong>
          </label>
        </div>
      )
  }

  render() {

    const { handleSubmit, fields: {email, password} } = this.props;

    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
              {this.renderAlert()}
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

function mapStateToProps(state) {
  return { errorMsg: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(LoginForm);
