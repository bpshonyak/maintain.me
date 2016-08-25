import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Sidebar from './sidebar';
import MainArea from './main_area';
import MainFab from './../buttons/main_fab';

import * as actions from './../../actions';

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
      <div className='row'>
        <Sidebar />
        <MainArea />
        <MainFab />
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
