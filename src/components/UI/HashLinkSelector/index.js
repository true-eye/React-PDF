// @flow

import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import {
  Menu, Dropdown, Button,
} from 'antd';

import { DownChevron } from '../../../assets/images/svgIcons';

const { Item: Option } = Menu;

type Props = {
  hashLinks: Array<{
    name: string,
    label: string,
  }>,
  matchUrl: string,
}

function hashLinkSelector ( { hashLinks, matchUrl }: Props ) {
  const navigationOptions = (
    <Menu>
      { hashLinks.map( ( { id, label } ) => (
        <Option key={ id }>
          <Link
            smooth
            to={ `${ matchUrl }#${ id }` }
          >
            { label }
          </Link>
        </Option>
      ) ) }
    </Menu>
  );
  return (
    <Dropdown overlay={ navigationOptions }>
      <Button style={ { marginLeft: 8 } }>
        Go to
        <DownChevron height="10px" width="10px" />
      </Button>
    </Dropdown>
  );
}

export default hashLinkSelector;
