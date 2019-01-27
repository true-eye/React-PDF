// @flow

import React from 'react';
import { hot } from 'react-hot-loader';

import App from '../App';

function Root () {
  return (
    <App />
  );
}

export default hot( module )( Root );
