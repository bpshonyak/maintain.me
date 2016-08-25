import React, { Component } from 'react';

export default class MainFab extends Component {
  render() {
    return (
      <div className="fixed-action-btn click-to-toggle">
        <a className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating red">
              <i className="material-icons">mode_edit</i>
            </a>
          </li>
          <li>
            <a className="btn-floating green">
              <i className="material-icons">insert_chart</i>
            </a>
          </li>
          <li>
            <a className="btn-floating blue">
              <i className="material-icons">settings</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
