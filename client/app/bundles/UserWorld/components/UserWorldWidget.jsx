// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class UserWorldWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  };

  // React will automatically provide us with the event `e`

  render() {
    const { first_name } = this.props;
    const { last_name } = this.props;
    const { email } = this.props;
    const { city } = this.props;
    const { address } = this.props;

    return (
      <tr className="table">
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{city}</td>
      </tr>
    );
  }
}
