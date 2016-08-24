import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {

    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-4">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}
