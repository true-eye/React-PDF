// @flow

import { range } from 'ramda';

import fieldDictionary from '../../assets/fieldDictionary';

function formatData ( {
  data, key, sector, title,
} ) {
  const { [ key ]: { trend } } = data;
  const { categoriesData, values } = trend.reduce( ( accum, { month, value } ) => {
    accum.categoriesData.push( month );
    accum.values.push( value.toPrecision( 3 ) );
    return accum;
  }, { categoriesData: [], values: [] } );
  return {
    title,
    chartData: {
      categoriesData,
      valuesData: [
        {
          data: values,
          name: title,
        },
      ],
    },
  };
}

type MakeChildren = {
  data: any,
  sector: string,
  sectorFields: Array<string>,
};

function makeChildren ( { data, sector, sectorFields }: MakeChildren ) {
  // Map over the field keys, convert the data into the format needed
  // for the ScoreComparison node
  return sectorFields.map( field => ( {
    ...formatData( {
      data, key: field, title: fieldDictionary( { field, sector } ), sector,
    } ),
  } ) );
}

type MakeChildrenFromRange = {
  baseField: string,
  data: any,
  endNumber: number,
  sector: string,
};

function makeChildrenFromRange ( {
  baseField, data, endNumber, sector,
}: MakeChildrenFromRange ) {
// Create an array of thr field names to pass to makeChildren
  const sectorFields = range( 1, endNumber + 1 )
    .map( number => `${ baseField }${ number }` );
  return makeChildren( { data, sector, sectorFields } );
}

type HelperFunction = {
  baseField: string,
  data: any,
  label: string,
  sector: string,
  questions: number,
}

function makeSection ( {
  baseField, data, label, sector, questions,
}: HelperFunction ) {
  return {
    children: makeChildrenFromRange( {
      baseField, data, sector, endNumber: questions,
    } ),
    label,
    id: baseField,
  };
}

type Sections = {
  sector: string, // Retail, fast F&B, full service F&B
  response: any,
};

function sections ( { sector, response: data }: Sections ) {
  const retail = sector === 'retail' && [
    makeSection( {
      baseField: 'store', data, label: 'Look and Feel of Store', sector, questions: 5,
    } ),
    makeSection( {
      baseField: 'prdct', data, label: 'Product', sector, questions: 4,
    } ),
    makeSection( {
      baseField: 'promo', data, label: 'Promotion', sector, questions: 2,
    } ),
    {
      children: makeChildren( {
        data, sectorFields: [ 'satis', 'confirm', 'ideal' ], sector,
      } ),
      id: 'satisfaction',
      label: 'Customer Satisfaction',
    },
    {
      children: makeChildren( {
        data, sectorFields: [ 'repur', 'pwom', 'recomm' ], sector,
      } ),
      id: 'loyalty',
      label: 'Loyalty and Advocacy',
    },
  ];
  const fnbFull = sector === 'fnbfull' && [
    makeSection( {
      baseField: 'store', data, label: 'Look and Feel of Store', sector, questions: 2,
    } ),
    makeSection( {
      baseField: 'order', data, label: 'Ordering Process', sector, questions: 5,
    } ),
    makeSection( {
      baseField: 'staff', data, label: 'Staff', sector, questions: 4,
    } ),
    makeSection( {
      baseField: 'product', data, label: 'Product', sector, questions: 7,
    } ),
    makeSection( {
      baseField: 'payment ', data, label: 'Payment Process', sector, questions: 2,
    } ),
    {
      children: makeChildren( {
        data, sectorFields: [ 'repur', 'pwom', 'recomm' ], sector,
      } ),
      id: 'loyalty',
      label: 'Loyalty and Advocacy',
    },
  ];
  const fnbQuick = sector === 'fnbquick' && [
    makeSection( {
      baseField: 'store', data, label: 'Look and Feel of Store', sector, questions: 2,
    } ),
    makeSection( {
      baseField: 'order', data, label: 'Ordering Process', sector, questions: 5,
    } ),
    makeSection( {
      baseField: 'staff', data, label: 'Staff', sector, questions: 4,
    } ),
    {
      children: [
        ...makeChildrenFromRange( {
          baseField: 'prdct', data, endNumber: 6, sector,
        } ),
        ...makeChildren( {
          data, sectorFields: [ 'reasonp', 'valmon' ], sector,
        } ),
      ],
      id: 'product',
      label: 'Product',
    },
    {
      children: makeChildren( {
        data, sectorFields: [ 'order6' ], sector,
      } ),
      id: 'payment',
      label: 'Payment Process is smooth',
    },
    {
      children: makeChildren( {
        data, sectorFields: [ 'repur', 'pwom', 'recomm' ], sector,
      } ),
      id: 'sentiment',
      label: 'Customer Sentiment',
    },
  ];
  return fnbFull || fnbQuick || retail;
}

export default sections;
