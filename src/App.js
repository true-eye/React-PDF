// @flow

import React, { Component } from 'react';

// $FlowFixMe
import './assets/styles/styles.less';

// $FlowFixMe
import style from './assets/styles/layout.less';

import SideBar from './components/SideBar/SideBar';

import DashboardScores from './components/DashboardScores';

type Props = {
  userAccess: string,
  path: string,
}

/* eslint-disable react/prefer-stateless-function */
class Layout extends Component<Props> {
  render () {
    return (
      <div className={ style.container }>
        <SideBar
          path="/dashboard"
          userType="Tactical"
        />
        <div className={ style.content }>
          <DashboardScores />
        </div>
      </div>
    );
  }
}

export default Layout