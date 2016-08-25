import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class Welcome extends Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Welcome);
