import React, { PropTypes } from 'react';
import UserWorldWidget from '../components/UserWorldWidget';

// Simple example of a React "smart" component
export default class User extends React.Component {
  render() {
    return (
      <UserWorldWidget key ={this.props.id} first_name={this.props.first_name} last_name={this.props.last_name} email={this.props.email} city={this.props.city} address={this.props.address} >
      </UserWorldWidget>
    );
  }
}
