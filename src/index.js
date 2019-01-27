// @flow

import React from 'react';
import ReactDOM from 'react-dom';

// if ( process.env.NODE_ENV !== 'production' ) {
//  const { whyDidYouUpdate } = require( 'why-did-you-update' );
//  whyDidYouUpdate( React );
// }

import Root from './components/Root';

ReactDOM.render(
  <Root />,
  document.getElementById( 'root' )
);
