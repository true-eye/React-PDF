// @flow

import React, { Component } from 'react';

// $FlowFixMe
import style from './page.less';

import HashLinkSelector from '../HashLinkSelector';

type Props = {
  branchSelectable?: boolean,
  children: any,
  comparisonSelectable?: boolean,
  hashLinks?: null | Array<{
    id: string,
    label: string,
  }>,
  matchUrl: string,
  pageDescriptor: string,
  pageTitle?: string | null,
  selectedBranch: string,
}

type State = {}

/* eslint-disable react/prefer-stateless-function */

class PageTitle extends Component<Props, State> {
  static defaultProps = {
    branchSelectable: false,
    comparisonSelectable: false,
    dateSelectable: false,
    hashLinks: null,
    pageTitle: null,
  }

  render () {
    const {
      branchSelectable,
      children,
      hashLinks,
      matchUrl,
      pageDescriptor,
      pageTitle,
      selectedBranch,
    } = this.props;
    const company = 'Sushei Tei';
    const title = pageTitle || company;
    return (
      <section className={ style.wrapper }>
        <h2 className={ style.page__subtitle }>
          { pageDescriptor }
        </h2>
        <h1 className={ style.page__title }>
          {/* Company name */}
          { title }
          {/* HashLink to navigate to section of page */}
          { hashLinks && (
            <HashLinkSelector hashLinks={ hashLinks } matchUrl={ matchUrl } />
          ) }
          {/* Text of the selected dates if the page requires it */}
          { branchSelectable && `, ${ selectedBranch }` }
          {/* Branch selector dropdown if needed */}
          {/* First date picker if needed */}
          {/* Twin date pickers for the time comparison pages */}
        </h1>
        { children }
      </section>
    );
  }
}

/* eslint-enable */

export default PageTitle;
