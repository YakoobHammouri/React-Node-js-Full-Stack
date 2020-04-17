import React, { Component } from 'react';

export default class user extends Component {
  state = { user: [] };
  componentDidMount() {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.user.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
}
