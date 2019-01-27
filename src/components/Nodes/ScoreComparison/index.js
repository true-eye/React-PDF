// @flow

import React from 'react';
// import CountUp from 'react-countup';

// $FlowFixMe
import styles from './scoreComparison.less';

import BarChart from '../BarChart';

import { barChartBlue, scoreColors } from '../../../assets/helpers';

type Props = {
  title: string,
  score?: number,
  subTitle?: string,
  chartData: {
    categoriesData: Array<string | number>,
    valuesData: Array<{
      name: string,
      data: Array<number>,
    }>,
  }
};

function scoreComparisonNode ( {
  chartData, score, subTitle, title,
}: Props ) {
  // Get the last two values from chartData.valuesdata[ data ] and get the trend
  const { valuesData: [ dataArray ] } = chartData;
  const { data: barChartValues } = dataArray;
  const [ secondLastScore, lastScore ] = barChartValues.slice( -2 );
  let trend = 'average';
  if ( lastScore > secondLastScore ) {
    trend = 'above';
  } else if ( lastScore < secondLastScore ) {
    trend = 'below';
  }
  // 11 standard blue lines than one to match the border color
  const chartColors = [
    ...Array( 11 ).fill( ...barChartBlue ),
    scoreColors[ trend ],
  ];
  return (
    <div className={ [ styles.container, styles[ trend ] ].join( ' ' ) }>
      <h4 className={ styles.title }>
        { title }
      </h4>
      <div className={ styles.details__container }>
        <h5 className={ styles.score }>
          {/* <CountUp */}
          {/* end={ score } */}
          {/* decimals={ 1 } */}
          {/* /> */}
          { lastScore }
        </h5>
        <BarChart
          axisMax={ 10 }
          chartData={ chartData }
          colorizeFields
          colors={ chartColors }
          grid={ {
            bottom: '50px', left: '20px', right: '0%', top: '10px',
          } }
          height="190px"
          labelRotate={ 45 }
          title={ title }
        />
      </div>
    </div>
  );
}

scoreComparisonNode.defaultProps = {
  score: 0,
  subTitle: '',
};

type ScoreProps = {
  score: number | string,
  title: string,
  subTitle: string,
}

export function basicScoreCard ( { score, title, subTitle }: ScoreProps ) {
  return (
    <div className={ [ styles.container, styles.brown__background ].join( ' ' ) }>
      <h4 className={ styles.title }>
        { title }
      </h4>
      <h5 className={ styles.subtitle }>
        { subTitle }
      </h5>
      <div className={ styles.details__container }>
        <span className={ styles.score }>
          { score }
        </span>
      </div>
    </div>
  );
}

export default scoreComparisonNode;
