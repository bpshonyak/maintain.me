import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="">Random Link</Link>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Dashboard);
