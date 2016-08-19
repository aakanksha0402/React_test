import React from 'react';
import ReactOnRails from 'react-on-rails';

import UserWorld from '../containers/UserWorld';

const UserWorldApp = (props) => (
  <UserWorld {...props} />
);

// This is how react_on_rails can see the UserWorldApp in the browser.
ReactOnRails.register({ UserWorldApp });
