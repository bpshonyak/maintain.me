import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Nav extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      );
    } else {
      return [
        <li>
          <Link to='/login' key={1}>Login</Link>
        </li>,
        <li>
          <Link to='/signup' key={2}>Signup</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-4">
            <Link to="/" className="brand-logo">maintain.me</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderLinks()}
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Nav);
