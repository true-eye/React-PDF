// @flow

import React from 'react';

// $FlowFixMe
import style from './sideBar.less';

import NavBar from './NavBar/NavBar';

import smuLogo from '../../assets/images/smu.png';

type Props = {
  path: string,
  userType: string,
}

function sideBar ( { path, userType }: Props ) {
  if ( path === '/' ) return null;
  return (
    <aside className={ style.sidebar }>
      <div className={ style.logo__container }>
        <img src={ smuLogo } height="100%" alt="SMU Logo" />
      </div>
      <NavBar navType={ userType } />
    </aside>
  );
}

export default sideBar;
