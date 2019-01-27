// @flow

import React, { Component } from 'react';

// $FlowFixMe
import style from './navBar.less';

import NavUserProfile from '../../UI/UserProfile';

import {
  Clipboard, Fund, Home, Logout, Shopfront, Users,
} from '../../../assets/images/svgIcons';

const logout = {
  label: 'Logout', logo: <Logout />, route: '/logout',
};

const adminNavItems = [
  {
    label: 'Dashboard', logo: <Fund />, route: '/dashboard',
  },
  {
    label: 'Manage Accounts', logo: <Users />, route: '/accounts',
  },
  {
    label: 'Manage Surveys', logo: <Clipboard />, route: '/surveys',
  },
  {
    label: 'Report Generate', logo: <Clipboard />, route: '/report',
  },
  logout,
];

const regionalNavItems = [
  {
    label: 'Dashboard', logo: <Home />, route: '/dashboard',
  },
  {
    label: 'Branch Statistic', logo: <Shopfront />, route: '/statistic',
  },
  {
    label: 'Branch Scores', logo: <Clipboard />, route: '/branch',
  },
  logout,
];

const strategicNavItems = [
  {
    label: 'Dashboard', logo: <Home />, route: '/dashboard',
  },
  {
    label: 'Competitor', logo: <Clipboard />, route: '/competitor',
  },
  {
    label: 'Time Period', logo: <Clipboard />, route: '/timeperiod',
  },
  {
    label: 'Segment', logo: <Clipboard />, route: '/segment',
  },
  {
    label: 'Branch', logo: <Shopfront />, route: '/branch',
  },
  {
    label: 'Real Time', logo: <Clipboard />, route: '/realtime',
  },
  {
    label: 'Custom Question', logo: <Clipboard />, route: '/question',
  },
  logout,
];

const taticalNavItems = [
  {
    label: 'Dashboard', logo: <Home />, route: '/dashboard',
  },
  {
    label: 'Branch Statistic', logo: <Shopfront />, route: '/branch',
  },
  logout,
];

const navItemsDictionary = {
  Admin: adminNavItems,
  Regional: regionalNavItems,
  Strategic: strategicNavItems,
  Tactical: taticalNavItems,
};

/* eslint-disable react/require-default-props */
type Props = {
  navType: string,
  path: string,
};
/* eslint-enable */

type State = {
}

/* eslint-disable react/prefer-stateless-function */
class NavBar extends Component<Props, State> {
  static defaultProps = {
    navType: 'Tatical',
  }

  render () {
    const { navType } = this.props;
    const path = '/dasboard'
    const itemActiveClasses = [ style.item, style.active ].join( ' ' );
    const navBarItems = navItemsDictionary[ navType ];
    return (
      <nav className={ style.container }>
        <a
          className={ /^\/user\//.test( path ) // For '/user/' paths
            ? [ itemActiveClasses, style.profile ].join( ' ' )
            : [ style.item, style.profile ].join( ' ' ) }
          href="/user/general"
        >
          <NavUserProfile />
        </a>
        {navBarItems.map( ( { label, logo, route } ) => (
          <a
            className={ path.includes( route )
              ? itemActiveClasses
              : style.item }
            key={ route }
            to={ route }
          >
            <div className={ style.icon }>
              { logo }
            </div>
            <div className={ style.label }>
              { label }
            </div>
          </a>
        ) ) }
      </nav>
    );
  }
}


export default NavBar;
