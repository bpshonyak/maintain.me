import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class LoginForm extends Component {

  render() {

    const iconStyles = {
      marginRight: 24,
      fontSize: 50
    };

    return (
      <div className="form-container">
        <TextField
        hintText="Email"
        errorText=""
        />
        <br/>
        <TextField
          hintText="Password"
          type="password"
          errorText=""
        />
        <br/>
        <RaisedButton label="Login" primary={true} />
        <p>Or login with a social provider!</p>

        <FontIcon
          className="fa fa-github"
          style={iconStyles}
        />

        <FontIcon
          className="fa fa-facebook-official"
          style={iconStyles}
        />

      </div>
    );
  }
}

export default LoginForm;
