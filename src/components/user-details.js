import React, { Component } from 'react';
import User from './user';

class UserDetails extends Component {
  render() {
    return (
      <div>
        <User id={1} />
      </div>
    );
  }
}

export default UserDetails;
