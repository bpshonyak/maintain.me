import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
        <h1>Root App Component</h1>
      </div>
    );
  }
}
