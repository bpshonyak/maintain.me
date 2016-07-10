import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Nav extends Component {
  render() {
    return (
      <AppBar
        title="maintain.me"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
