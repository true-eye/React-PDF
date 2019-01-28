// @flow

import React, { Component } from 'react';

import { Col, Row } from 'antd';

import PageBody from '../UI/PageBody';

import ScoreComparison from '../Nodes/ScoreComparison';

import sectionsOrderDictionary from './sectionsOrderDictionary';

import html2canvas from 'html2canvas';

import jsPDF from 'jspdf';

const response = {
  overallx: {
    field: 'overallx',
    trend: [
      { month: 'Oct 2018', value: 8.029411764705882 },
      { month: 'Nov 2018', value: 7.75 },
      { month: 'Dec 2018', value: 7.947368421052632 },
      { month: 'Jan 2019', value: 7.769230769230769 },
    ],
  },
  store1: {
    field: 'store1',
    trend: [
      { month: 'Oct 2018', value: 7.235294117647059 },
      { month: 'Nov 2018', value: 7.136363636363637 },
      { month: 'Dec 2018', value: 7.394736842105263 },
      { month: 'Jan 2019', value: 7.461538461538462 },
    ],
  },
  store2: {
    field: 'store2',
    trend: [
      { month: 'Oct 2018', value: 7.764705882352941 },
      { month: 'Nov 2018', value: 7.579545454545454 },
      { month: 'Dec 2018', value: 7.684210526315789 },
      { month: 'Jan 2019', value: 7.826923076923077 },
    ],
  },
  store3: {
    field: 'store3',
    trend: [
      { month: 'Oct 2018', value: 7.617647058823529 },
      { month: 'Nov 2018', value: 7.590909090909091 },
      { month: 'Dec 2018', value: 7.7368421052631575 },
      { month: 'Jan 2019', value: 7.673076923076923 },
    ],
  },
  store4: {
    field: 'store4',
    trend: [
      { month: 'Oct 2018', value: 7.529411764705882 },
      { month: 'Nov 2018', value: 7.6022727272727275 },
      { month: 'Dec 2018', value: 7.618421052631579 },
      { month: 'Jan 2019', value: 7.730769230769231 },
    ],
  },
  store5: {
    field: 'store5',
    trend: [
      { month: 'Oct 2018', value: 7.647058823529412 },
      { month: 'Nov 2018', value: 7.863636363636363 },
      { month: 'Dec 2018', value: 7.894736842105263 },
      { month: 'Jan 2019', value: 7.826923076923077 },
    ],
  },
  staff1: {
    field: 'staff1',
    trend: [
      { month: 'Oct 2018', value: 7.764705882352941 },
      { month: 'Nov 2018', value: 7.7727272727272725 },
      { month: 'Dec 2018', value: 8.039473684210526 },
      { month: 'Jan 2019', value: 7.75 },
    ],
  },
  staff2: {
    field: 'staff2',
    trend: [
      { month: 'Oct 2018', value: 7.882352941176471 },
      { month: 'Nov 2018', value: 7.75 },
      { month: 'Dec 2018', value: 7.973684210526316 },
      { month: 'Jan 2019', value: 7.8076923076923075 },
    ],
  },
  staff3: {
    field: 'staff3',
    trend: [
      { month: 'Oct 2018', value: 7.647058823529412 },
      { month: 'Nov 2018', value: 7.738636363636363 },
      { month: 'Dec 2018', value: 7.868421052631579 },
      { month: 'Jan 2019', value: 7.711538461538462 },
    ],
  },
  staff4: {
    field: 'staff4',
    trend: [
      { month: 'Oct 2018', value: 7.911764705882353 },
      { month: 'Nov 2018', value: 7.761363636363637 },
      { month: 'Dec 2018', value: 7.9605263157894735 },
      { month: 'Jan 2019', value: 7.8076923076923075 },
    ],
  },
  staff5: {
    field: 'staff5',
    trend: [
      { month: 'Oct 2018', value: 7.9411764705882355 },
      { month: 'Nov 2018', value: 7.988636363636363 },
      { month: 'Dec 2018', value: 7.9868421052631575 },
      { month: 'Jan 2019', value: 7.903846153846154 },
    ],
  },
  prdct1: {
    field: 'prdct1',
    trend: [
      { month: 'Oct 2018', value: 8.029411764705882 },
      { month: 'Nov 2018', value: 7.943181818181818 },
      { month: 'Dec 2018', value: 8.052631578947368 },
      { month: 'Jan 2019', value: 7.8076923076923075 },
    ],
  },
  prdct2: {
    field: 'prdct2',
    trend: [
      { month: 'Oct 2018', value: 7.617647058823529 },
      { month: 'Nov 2018', value: 7.738636363636363 },
      { month: 'Dec 2018', value: 7.7631578947368425 },
      { month: 'Jan 2019', value: 7.6923076923076925 },
    ],
  },
  prdct3: {
    field: 'prdct3',
    trend: [
      { month: 'Oct 2018', value: 7.764705882352941 },
      { month: 'Nov 2018', value: 7.795454545454546 },
      { month: 'Dec 2018', value: 7.881578947368421 },
      { month: 'Jan 2019', value: 7.711538461538462 },
    ],
  },
  prdct4: {
    field: 'prdct4',
    trend: [
      { month: 'Oct 2018', value: 7.852941176470588 },
      { month: 'Nov 2018', value: 7.886363636363637 },
      { month: 'Dec 2018', value: 7.9605263157894735 },
      { month: 'Jan 2019', value: 7.826923076923077 },
    ],
  },
  promo1: {
    field: 'promo1',
    trend: [
      { month: 'Oct 2018', value: 7.411764705882353 },
      { month: 'Nov 2018', value: 7.375 },
      { month: 'Dec 2018', value: 7.5394736842105265 },
      { month: 'Jan 2019', value: 6.9423076923076925 },
    ],
  },
  promo2: {
    field: 'promo2',
    trend: [
      { month: 'Oct 2018', value: 7.382352941176471 },
      { month: 'Nov 2018', value: 7.181818181818182 },
      { month: 'Dec 2018', value: 7.2631578947368425 },
      { month: 'Jan 2019', value: 6.8076923076923075 },
    ],
  },
  overallq: {
    field: 'overallq',
    trend: [
      { month: 'Oct 2018', value: 7.676470588235294 },
      { month: 'Nov 2018', value: 7.636363636363637 },
      { month: 'Dec 2018', value: 7.684210526315789 },
      { month: 'Jan 2019', value: 7.769230769230769 },
    ],
  },
  reasonp: {
    field: 'reasonp',
    trend: [
      { month: 'Oct 2018', value: 7.529411764705882 },
      { month: 'Nov 2018', value: 7.636363636363637 },
      { month: 'Dec 2018', value: 7.75 },
      { month: 'Jan 2019', value: 7.538461538461538 },
    ],
  },
  valmon: {
    field: 'valmon',
    trend: [
      { month: 'Oct 2018', value: 7.470588235294118 },
      { month: 'Nov 2018', value: 7.5 },
      { month: 'Dec 2018', value: 7.605263157894737 },
      { month: 'Jan 2019', value: 7.403846153846154 },
    ],
  },
  satis: {
    field: 'satis',
    trend: [
      { month: 'Oct 2018', value: 7.823529411764706 },
      { month: 'Nov 2018', value: 7.7727272727272725 },
      { month: 'Dec 2018', value: 7.7894736842105265 },
      { month: 'Jan 2019', value: 7.903846153846154 },
    ],
  },
  confirm: {
    field: 'confirm',
    trend: [
      { month: 'Oct 2018', value: 8 },
      { month: 'Nov 2018', value: 7.7727272727272725 },
      { month: 'Dec 2018', value: 7.842105263157895 },
      { month: 'Jan 2019', value: 7.961538461538462 },
    ],
  },
  ideal: {
    field: 'ideal',
    trend: [
      { month: 'Oct 2018', value: 7.294117647058823 },
      { month: 'Nov 2018', value: 7.295454545454546 },
      { month: 'Dec 2018', value: 7.223684210526316 },
      { month: 'Jan 2019', value: 7.173076923076923 },
    ],
  },
  repur: {
    field: 'repur',
    trend: [
      { month: 'Oct 2018', value: 7.382352941176471 },
      { month: 'Nov 2018', value: 7.693181818181818 },
      { month: 'Dec 2018', value: 7.776315789473684 },
      { month: 'Jan 2019', value: 7.769230769230769 },
    ],
  },
  pwom: {
    field: 'pwom',
    trend: [
      { month: 'Oct 2018', value: 7.882352941176471 },
      { month: 'Nov 2018', value: 7.829545454545454 },
      { month: 'Dec 2018', value: 7.921052631578948 },
      { month: 'Jan 2019', value: 7.865384615384615 },
    ],
  },
  recomm: {
    field: 'recomm',
    trend: [
      { month: 'Oct 2018', value: 7.588235294117647 },
      { month: 'Nov 2018', value: 7.761363636363637 },
      { month: 'Dec 2018', value: 7.907894736842105 },
      { month: 'Jan 2019', value: 7.788461538461538 },
    ],
  },
};

type Props = {
  clearResponse: Function,
  getDashBoardScores: Function,
  match: {
    url: string,
  },
  response: any,
  tacticalDash?: boolean,
}

/* eslint-disable react/prefer-stateless-function */

class DashboardScores extends Component<Props> {
  static defaultProps = {
    tacticalDash: false,
  };

  async printDocument() {
    const pdf = new jsPDF('p', 'mm', 'a4');
    window.html2canvas = html2canvas

    var page_title = document.getElementById('store');
    var page = 0, row = 0, col = 0;
    var ptRow = 20, ptCol = 10;
    var comHeight = 0, comWidth = 0;

    var h2_dashboard = page_title.previousSibling.previousSibling.previousSibling

    await html2canvas(h2_dashboard)
        .then((canvas) => {
          const imgData = canvas.toDataURL('png');
          pdf.addImage(imgData, 'png', ptCol + 5, ptRow, canvas.width / 8, canvas.height / 8);
          ptRow += canvas.height / 8 + 5;
        });
      
    var dashboard_title = h2_dashboard.nextSibling;

    await html2canvas(dashboard_title)
        .then((canvas) => {
          const imgData = canvas.toDataURL('png');
          pdf.addImage(imgData, 'png', ptCol + 5, ptRow, canvas.width / 8, canvas.height / 8);
          ptRow += canvas.height / 8 + 5;
        });

    while(page_title) {

      await html2canvas(page_title)
        .then((canvas) => {
          const imgData = canvas.toDataURL('png');
          pdf.addImage(imgData, 'png', ptCol + 5, ptRow, canvas.width / 8, canvas.height / 8);
          ptRow += canvas.height / 8 + 5;
        });

      var ant_row = page_title.nextSibling;
      var ant_col_8 = ant_row.firstChild;
      while(ant_col_8) {

        await html2canvas(ant_col_8)
            .then((canvas) => {
              const imgData = canvas.toDataURL('png');
              comHeight = canvas.height / 8;
              comWidth = canvas.width / 8;
              pdf.addImage(imgData, 'png', ptCol, ptRow, canvas.width / 8, canvas.height / 8);
              col ++; ptCol += comWidth;
              if( col == 3 ) {
                col = 0; ptCol = 10;
                row ++; ptRow += comHeight;
                if( row == 3 ) {
                  row = 0; ptRow = 20;
                  pdf.addPage();
                }
              }
            })
        ant_col_8 = ant_col_8.nextSibling;
      }
      page_title = ant_row.nextSibling;
      if( page_title ) {
        col = 0; ptCol = 10;
        row ++; ptRow += comHeight;
        if( row == 3 ) {
          row = 0; ptRow = 20;
          pdf.addPage();
        }
      }
    }
    pdf.save("dashboard.pdf");

  }

  render () {
    const pageBodyParams = { pageDescriptor: 'Dashboard' };
    const pageSections = sectionsOrderDictionary( { sector: 'retail', response } );
    return (
      <PageBody
        pageDescriptor="Competitor"
        { ...pageBodyParams }
        matchUrl="/dashboard"
      >
        <div className="mb5">
          <button onClick={this.printDocument}>Print To PDF</button>
        </div>
        { pageSections
          .map( ( { children, id, label } ) => (
            <React.Fragment key={ id }>
              <h3
                className="page__title"
                id={ id }
              >
                { label }
              </h3>
              <Row align="top" gutter={ 49 }>
                { children.map( ( { chartData, title } ) => (
                  <Col
                    key={ title }
                    span={ 8 }
                  >
                    <ScoreComparison
                      title={ title }
                      chartData={ chartData }
                    />
                  </Col>
                ) ) }
              </Row>
            </React.Fragment>
          ) )
        }
      </PageBody>
    );
  }
}

/* eslint-enable */

export default DashboardScores;
