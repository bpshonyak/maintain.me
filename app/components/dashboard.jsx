import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from './../actions';

class Dashboard extends Component {

  componentWillMount() {
    this.props.getProfile();
  }

  renderProfile() {
    if (this.props.profile)
      return (
        <div>
          {this.props.profile.email}
        </div>
      );
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="">Random Link</Link>
        {this.renderProfile()}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.account.profile
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
