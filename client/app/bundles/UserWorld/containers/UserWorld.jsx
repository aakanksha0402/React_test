import React, { PropTypes } from 'react';
import User from '../containers/User';

// Simple example of a React "smart" component
export default class UserWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { users: this.props.data
    };
  }
  render() {
    var userNodes = this.state.users.map(function(user) {
      return (
          <User key={user.id} first_name={user.first_name} last_name={user.last_name} email={user.email} city={user.city} address={user.address} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {userNodes}
        </tbody>
      </table>
    );
  }
}
