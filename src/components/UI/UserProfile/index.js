// @flow

import React, { Component } from 'react';

// $FlowFixMe
import style from './user.less';

import { User as UserIcon } from '../../../assets/images/svgIcons';

type Props = {
  columnDisplay?: boolean,
  user: USER_TYPE,
}

/* eslint-disable react/prefer-stateless-function */
class UserProfile extends Component<Props> {
  static defaultProps = {
    columnDisplay: false,
  };

  render () {
    const { columnDisplay } = this.props;
    const image = null;
    const name = 'Datavis';
    const role = 'CEO';
    const wrapperClasses = columnDisplay
      ? [ style.container, style.column ].join( ' ' )
      : style.container;
    return (
      <div className={ wrapperClasses }>
        <div className={ style.photo__wrapper }>
          { image // is there a string in the image property?
            ? (
              <img // User Image
                alt="User profile"
                className={ style.photo }
                src={ image }
              />
            )
            : <UserIcon className={ style.photo } /> // SVG icon outline
          }
        </div>
        <div className={ style.details }>
          <h5 className={ style.name }>
            { name }
          </h5>
          <h6 className={ style.role }>
            { role }
          </h6>
        </div>
      </div>
    );
  }
}

export default UserProfile;
