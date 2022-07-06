import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        Habit Tracker<span> {this.props.counts}</span>
      </div>
    );
  }
}

export default Navbar;
