import {
  ascend, descend, prop, sort,
} from 'ramda';

import moment from 'moment';

export const barChartBlue = [ '#4472C4' ];

export const barChartCyan = [ '#61A0A8' ];

export const barChartDarkGreen = [ '#2F4554' ];

export const barChartOrange = [ '#D48265' ];

export const barChartRed = [ '#C23531' ];

export const barChartMultiColors = [ '#4472C4', '#92D050', '#ED7D31', barChartCyan ];

export const barChartColorsWithGaps = [ '#FFF', '#FFF', '#4472C4', '#92D050', '#FFF', '#FFF', '#4472C4', '#92D050', '#ED7D31', '#61A0A8' ];

export const calendarMapGrey = [ '#EDEDED' ];

export const compoundChartColors = [ '#B9AE8E', '#66D150', '#3B3F62' ];

export const darkGreyLine = [ '#7A7A7A' ];

export const greenLine = [ '#61A0A8' ];

export const pieChartColors = [ '#4472C4', '#ED7D31', '#A5A5A5', '#78B64B', '#FFC000', '#5B9BD5' ];

export const scoreColors = {
  above: '#1ABC9C',
  average: '#00008b',
  below: '#E74C3C',
};

export function calculateAxisEndPoint ( {
  valuesData: values,
  decimalAccuracy = false,
} ) {
  const combinedAxisData = values
    .reduce( ( accum, dataObj ) => (
      [ ...accum, ...dataObj.data ]
    ), [ ] );
  const min = minimumAxisPoint( { combinedAxisData, decimalAccuracy } );
  const max = maximumAxisPoint( { combinedAxisData, decimalAccuracy } );
  return { max, min };
}

export function camelToTitleCase ( camelCase ) {
  return camelCase
    .replace( /([A-Z])/g, match => ` ${ match }` )
    .replace( /^./, match => match.toUpperCase() );
}

export function convertArrayToCsv ( array ) {
  const [ firstRecord ] = array;
  const header = Object.keys( firstRecord ).join( ',' );
  const body = array.map( row => (
    Object.values( row ).join( ',' )
  ) );
  return [ header, ...body ].join( '\n' );
}

export function formatMomentDates ( { endDate, startDate } ) {
  return `${ startDate.format( 'D MMM YYYY' ) } - ${ endDate.format( 'D MMM YYYY' ) }`;
}

export function formatTodaysDate () {
  return moment().format( 'D MMM YYYY' );
}

function getActiveAreaData ( { x, y } ) {
  const descriptionDictionary = {
    // Add interpolation to display here as in the browser
    prioritise: [
      `{p|(High Impact, Poorer${/*
*/'\n' }than Sub-sector Performance)\n}`,
      `{p|Attributes in this quadrant${/*
*/'\n' }should be of key concern for${/*
*/'\n' }the company. Efforts should${/*
*/'\n' }be prioritised to work on these${/*
*/'\n' }attributes.}`,
    ],
    maintain: [
      `{p|(High Impact, Better than${/*
*/'\n' }Sub-sector Performance)\n}`,
      `{p|The company should continue${/*
*/'\n' }to maintain satisfaction levels${/*
*/'\n' }for the attributes in this${/*
*/'\n' }quadrant.}`,
    ],
    review: [
      `{p|(Lower Impact, Better than${/*
*/'\n' }Sub-sector Performance)\n}`,
      `{p|The company may wish to${/*
*/'\n' }conduct a review to see if${/*
*/'\n' }attributes in this quadrant${/*
*/'\n' }have been over-resourced.}`,
    ],
    secondary: [
      `{p|(Lower Impact, Poorer than${/*
*/'\n' }Sub-sector Performance)\n}`,
      `{p|Given additional resources,${/*
*/'\n' }company should to work on the${/*
*/'\n' }attributes in this quadrant.}`,
    ],
  };
  let activeArea = null;
  if ( x >= 0 && y >= 1 ) activeArea = 'maintain';
  if ( x < 0 && y >= 1 ) activeArea = 'prioritise';
  if ( x >= 0 && y < 1 ) activeArea = 'review';
  if ( x < 0 && y < 1 ) activeArea = 'secondary';
  return { activeArea, areaDescription: descriptionDictionary[ activeArea ] };
}

function createAreaMarkData ( {
  activeMetric, chartData, seriesOptions, xMax
} ) {
  const areaConfig = {
    maintain: {
      activeColor: '#65D04F',
      data: [ [ {
        xAxis: 0,
        yAxis: 1,
      }, {
        xAxis: xMax,
        yAxis: xMax,
      } ] ],
      color: '#E5F1DB',
      formatter: [ '{h|Maintain}' ],
    },
    prioritise: {
      activeColor: '#E8B5B4',
      data: [ [ {
        xAxis: 0,
        yAxis: xMax,
      }, {
        xAxis: `-${ xMax }`,
        yAxis: 1,
      } ] ],
      color: '#F6D9DB',
      formatter: [ '{h|Prioritise}' ],
    },
    review: {
      activeColor: '#5DBCD2',
      data: [ [ {
        xAxis: xMax,
        yAxis: 0,
      }, {
        xAxis: 0,
        yAxis: 1,
      } ] ],
      color: '#DEEAF6',
      formatter: [ '{h|Review}' ],
    },
    secondary: {
      activeColor: '#E8B5B4',
      data: [ [ {
        xAxis: `-${ xMax }`,
        yAxis: 0,
      }, {
        xAxis: 0,
        yAxis: 1,
      } ] ],
      color: '#FBEDEC',
      formatter: [ '{h|Secondary}', '{h|Priority}' ],
    },
  };

  let activeArea;
  let areaDescription;
  let x;
  let y;
  const [ black, headingColor ] = [ '#000', '#A8A8AD' ];
  if ( chartData.hasOwnProperty( activeMetric ) ) {
    // get x and y co-ordinates of the current active metric
    ( { [ activeMetric ]: { data: [ [ x, y ] ] } } = chartData );
    ( { activeArea, areaDescription } = getActiveAreaData( { x, y } ) );
  }
  const areaPlotData = Object.keys( areaConfig ).map( ( areaKey ) => {
    const {
      [ areaKey ]: {
        activeColor, data, color, formatter,
      },
    } = areaConfig;
    const active = activeArea === areaKey;
    return {
      markArea: {
        data,
        itemStyle: {
          normal: {
            color: active
              ? activeColor
              : color,
            borderColor: black,
            borderWidth: 1,
          },
        },
        label: {
          formatter: active
            ? [ ...formatter, ...areaDescription ].join( '\n' )
            : formatter.join( '\n' ),
          rich: {
            h: {
              color: active ? black : headingColor,
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 20,
            },
            p: {
              color: black,
              fontSize: 12,
            },
          },
          position: 'inside',
          align: 'center',
        },
        silent: true,
      },
      ...seriesOptions,
    };
  } );
  return areaPlotData;
}

function createPlotPointData ( { activeMetric, chartData, seriesOptions } ) {
  const black = '#000';
  const grey = 'rgba(0, 0, 0, 0.5)';
  const plotPointData = Object.keys( chartData ).map( ( driverKey ) => {
    const { [ driverKey ]: { data, name } } = chartData;
    const hasPageFocus = activeMetric === driverKey;
    return {
      name,
      data,
      itemStyle: {
        // Symbol color
        color: hasPageFocus ? grey : black,
      },
      label: {
        // Label color
        color: hasPageFocus ? grey : black,
        formatter: '{a}',
        position: 'top',
      },
      ...seriesOptions,
    };
  } );
  return plotPointData;
}

function colorizeChartData ( {
  categoriesData, colors, valuesData,
} ) {
  return valuesData.map( ( value, index ) => (
    {
      value,
      // Name is added for Pie chart legend
      name: categoriesData[ index ],
      itemStyle: {
        color: colors[ index % colors.length ],
      },
    }
  ) );
}

export function formatChartData ( {
  chartData: {
    categoriesData, valuesData: values,
  },
  colors,
  colorizeFields,
  compound = false, // Flag combined bar and line chart
  seriesOptions,
  styleOptions,
} ) {
  let { type } = seriesOptions;
  return values.reduce( ( accum, valuesObj, index ) => {
    const { valuesData, legendData } = accum;
    const { data, name } = valuesObj;
    if ( compound ) {
      ( { type } = valuesObj ); // Reassign type if it's a compound chart
    }
    valuesData.push(
      {
        // Make every field on pie chart or bar chart colorful
        data: colorizeFields
          ? colorizeChartData( { valuesData: valuesObj.data, categoriesData, colors } )
          : data,
        itemStyle: {
          color: colors[ index % colors.length ],
          ...styleOptions,
        },
        ...seriesOptions,
        type,
        name,
      }
    );
    legendData.push(
      {
        name,
        /* eslint-disable no-nested-ternary */
        icon: compound
          ? type === 'bar'
            ? 'rect'
            : null
          : 'rect',
        /* eslint-enable */
      }
    );
    return accum;
    // $FlowFixMe
  }, { categoriesData, valuesData: [], legendData: [] } );
}

export function formatScatterChartData ( {
  activeMetric,
  chartData,
  seriesOptions,
  xMax,
} ) {
  const pointPlotData = createPlotPointData( { activeMetric, chartData, seriesOptions } );
  const areaMarkData = createAreaMarkData( {
    activeMetric, chartData, seriesOptions, xMax,
  } );
  return {
    areaMarkData,
    pointPlotData,
  };
}

function maximumAxisPoint ( {
  combinedAxisData: values, decimalAccuracy,
} ) {
  const aboveMaximum = decimalAccuracy
    ? 0.3
    : 1;
  const [ integer, decimal ] = ( Math.max(
    ...values
  ) + aboveMaximum ).toFixed( 1 ).split( '.' );
  return decimalAccuracy
    ? `${ integer }.${ decimal.replace( /[13579]/, n => +n - 1 ) }`
    : `${ `${ Math.ceil( integer ) }`.replace( /[13579]/, n => +n - 1 ) }`;
}

function minimumAxisPoint ( {
  combinedAxisData: values, decimalAccuracy,
} ) {
  const belowMinimum = decimalAccuracy
    ? 0.4
    : 2;
  const [ integer, decimal ] = ( Math.min(
    ...values
  ) - belowMinimum ).toFixed( 1 ).split( '.' );
  return decimalAccuracy
    ? `${ integer }.${ decimal.replace( /[13579]/, n => +n - 1 ) }`
    : `${ `${ Math.floor( integer ) }`.replace( /[13579]$/, n => +n - 1 ) }`;
}

export function sortAscending ( { data, key } ) {
  return sort( ascend( prop( key ) ), data );
}

export function sortDescending ( { data, key } ) {
  return sort( descend( prop( key ) ), data );
}
