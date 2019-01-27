// @flow

import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line'; // for compound bar/line charts
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

import { barChartBlue, formatChartData } from '../../../assets/helpers';

type Props = {
  axisMin?: number | null,
  axisMax?: number | null,
  axisLine?: boolean,
  axisTitle?: string | null,
  barWidth?: string | null,
  categoryGap?: string,
  chartData: {
    categoriesData: Array<string | number>,
    valuesData: Array<{
      name: string,
      data: Array<number>,
    }>,
  },
  colors?: Array<string>,
  colorizeFields?: boolean,
  compound?: boolean,
  grid?: {
    bottom: number | string,
    left: string,
    right: string,
    top: number | string,
  },
  height?: string,
  horizontal?: boolean,
  labelBars?: boolean,
  labelRotate?: number,
  legend?: boolean,
  splitLine?: boolean,
  title: string,
}

function barChart ( {
  axisMin, // Min value of y axis
  axisMax, // Max value of x axis
  axisTitle, // Title of axis
  axisLine, // Have line across chart from axis labels
  barWidth, // Small or medium else null - automatice
  categoryGap, // Distance between bars of different categories
  chartData, // Categories and data
  colors, // Color for multiple categories or to colorize fields
  colorizeFields, // Colorize fields within the same category
  compound, // Flag combines line and bar chart
  grid, // Set the borders around the chart (% or number)
  height,
  horizontal, // Change bar orientation
  labelBars,
  labelRotate, // Number to rotate the labels to fit better with limited space
  legend, // Display legend
  splitLine, // Lines across bars originating at axis values
  title,
}: Props ) {
  const seriesOptions = {
    barWidth,
    barCategoryGap: categoryGap,
    type: 'bar',
    name: title,
  };
  if ( labelBars ) {
    // $FlowFixMe
    seriesOptions.label = {
      normal: {
        color: '#000',
        position: compound ? 'insideLeft' : 'top',
        show: true,
      },
    };
  }

  const styleOptions = {
    barBorderRadius: horizontal ? [ 0, 3, 3, 0 ] : [ 3, 3, 0, 0 ],
  };
  const { categoriesData, legendData, valuesData } = formatChartData( {
    chartData, colors, colorizeFields, compound, seriesOptions, styleOptions,
  } );

  const echartOptions = {
    grid,
    series: valuesData,
    tooltip: {
      formatter: '{a}<br/>{b}: {c}',
      trigger: 'item',
    },
    xAxis: {
      axisLine: {
        // Horizontal switches from vertical bars to horizontal bars - default vertical
        show: !horizontal,
        lineStyle: {
          color: '#cecece',
        },
      },
      axisLabel: {
        show: true,
        color: '#000',
        interval: 0, // Force echarts to display all labels
        rotate: horizontal
          ? 0
          : labelRotate,
      },
      axisTick: { show: false },
      data: horizontal ? null : categoriesData,
      min: horizontal ? axisMin : null,
      max: horizontal ? axisMax : null,
      name: axisTitle,
      nameLocation: 'center',
      nameTextStyle: {
        color: '#000',
        padding: [ 8, 0, 0, 0 ],
      },
      splitLine: {
        show: horizontal
          ? splitLine
          : false,
      },
      type: horizontal ? 'value' : 'category',
    },
    yAxis: {
      axisLabel: {
        show: true,
        color: '#000',
        rotate: horizontal
          ? labelRotate
          : 0,
      }, /*, inside: true */
      axisLine: {
        show: horizontal,
        lineStyle: {
          color: '#cecece',
        },
      },
      axisTick: { show: false },
      inverse: horizontal, // Reverses values to be top down when in horizontal orientation
      data: horizontal ? categoriesData : null,
      min: horizontal ? null : axisMin,
      max: horizontal ? null : axisMax,
      splitLine: {
        show: horizontal
          ? false
          : splitLine,
      },
      type: horizontal ? 'category' : 'value',
    },
  };

  // Add legend if prop is passed - Only for multibar charts
  if ( legend ) {
    // $FlowFixMe
    echartOptions.legend = {
      data: legendData,
      y: 'bottom',
    };
  }
  return (
    <ReactEchartsCore
      echarts={ echarts }
      option={ echartOptions }
      notMerge
      lazyUpdate
      style={ { height } }
    />
  );
}

barChart.defaultProps = {
  axisMin: null,
  axisMax: null,
  axisLine: true,
  axisTitle: null,
  barWidth: null,
  categoryGap: '20%', // eCharts default
  colors: barChartBlue, // Standard blue color
  colorizeFields: false,
  compound: false,
  grid: {
    bottom: '8%', left: '5%', right: '0', top: '5%',
    // eChart Default is - bottom: 60, left: '10%', right: '10%', top: 60,
  },
  height: '330px',
  horizontal: false,
  labelBars: false,
  labelRotate: 0,
  legend: false,
  splitLine: true,
};

export default barChart;
