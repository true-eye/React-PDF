// @flow

import React from 'react';

// $FlowFixMe
import style from '../styles/icon.less';

type Props = {
  className?: string | null,
  height?: string,
  width?: string,
};

const universalSettings = {
  className: null,
  height: '25px',
  width: '25px',
};

type PropsWithAttribute = {
  className?: string | null,
  dataAttribute?: string,
  height?: string,
  title?: string,
};

export const CaretDown = ( {
  className, dataAttribute, height, title,
}: PropsWithAttribute ) => (
  <svg viewBox="0 0 1024 1024" className={ className } data-icon="caret-down" data-name={ dataAttribute } height={ height } fill="currentColor" aria-hidden="true">
    <title data-name={ dataAttribute }>
      { title }
    </title>
    <path data-name={ dataAttribute } d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
  </svg>
);

CaretDown.defaultProps = {
  className: null,
  height: '12px',
  title: 'Sort Descending',
};

export const CaretUp = ( {
  className, dataAttribute, height, title,
}: PropsWithAttribute ) => (
  <svg viewBox="0 0 1024 1024" className={ className } data-icon="caret-up" data-name={ dataAttribute } height={ height } fill="currentColor" aria-hidden="true">
    <title data-name={ dataAttribute }>
      { title }
    </title>
    <path data-name={ dataAttribute } d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
  </svg>
);

CaretUp.defaultProps = {
  className: null,
  dataAttribute: 'caretUp',
  height: '12px',
  title: 'Sort Ascending',
};

export const Camera = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="camera" width={ width } height={ height } aria-hidden="true">
    <title>
      Camera Icon
    </title>
    <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
  </svg>
);

Camera.defaultProps = universalSettings;

export const Clipboard = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="clipboard" width={ width } height={ height } aria-hidden="true">
    <title>
      Clipboard Icon
    </title>
    <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z" />
  </svg>
);

Clipboard.defaultProps = universalSettings;

export const DownChevron = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="down-chevron" width={ width } height={ height } aria-hidden="true">
    <title>
      Down Chevron Icon
    </title>
    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
  </svg>
);

DownChevron.defaultProps = universalSettings;

export const DownArrow = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="down-arrow" width={ width } height={ height } aria-hidden="true">
    <title>
      Down Arrow Icon
    </title>
    <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
  </svg>
);

DownArrow.defaultProps = universalSettings;

export const Fund = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="fund" width={ width } height={ height } aria-hidden="true">
    <title>
      Admin Dashboard
    </title>
    <path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L531 565 416.6 450.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z" />
  </svg>
);

Fund.defaultProps = universalSettings;

export const Home = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="home" width={ width } height={ height } aria-hidden="true">
    <title>
      Dashboard Icon
    </title>
    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
  </svg>
);

Home.defaultProps = universalSettings;

export const Left = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="left" width={ width } height={ height } aria-hidden="true">
    <title>
      Left
    </title>
    <path fill="currentColor" d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"/>
  </svg>
);

Left.defaultProps = universalSettings;

export const Logout = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="logout" width={ width } height={ height } aria-hidden="true">
    <title>
      Logout Icon
    </title>
    <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" />
  </svg>
);

Logout.defaultProps = universalSettings;

type MedalProps = {
  className?: string | null,
  height?: string,
  position: number,
  width?: string,
};

export const Medal = ( {
  className, height, position, width,
}: MedalProps ) => {
  const medalColor = {
    /* eslint-disable quote-props */
    '0': `.a{fill:#e95454;}.b{fill:#ed6362;}.c{fill:#ffcc5b;}.d{fill:#fdbc4b;}.e{fill:#ffdb70;}.f{fill:#fff;opacity:0.2;}.g{fill:#ec9922;}`,
    '1': `.a{fill:#1f65c2;}.b{fill:#5495e9;}.c{fill:#d8d8d8;}.d{fill:#b6b6b6;}.e{fill:#e4e4e2;}.f{fill:#fff;opacity:0.2;}.g{fill:#a1a1a1;}`,
    '2': `.a{fill:#1fbc72;}.b{fill:#32d5a0;}.c{fill:#d48804;}.d{fill:#b47200;}.e{fill:#e39205;}.f{fill:#fff;opacity:0.2;}.g{fill:#a36904;}`,
    /* eslint-enable */
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.96 20.065" className={ className } data-icon={ `position-${ position + 1 }` } width={ width } height={ height } aria-hidden="true">
      <title>
        Podium Medal Icon
      </title>
      <defs>
        <style>
          { medalColor[ position ] }
        </style>
      </defs>
      <g transform="translate(-39.592)">
        <path className="a" d="M43.974,221.248,39.592,229.5l3.979-.368,1.926,3.5,4.382-8.256Z" transform="translate(0 -212.573)" />
        <g transform="translate(43.212 8.675)">
          <path className="b" d="M133.184,263.074a.559.559,0,0,0-.263-.716l-.252-.134a.539.539,0,0,1,.519-.945l.713.378a.45.45,0,0,0,.61-.189l.018-.034a.425.425,0,0,0-.164-.6l-2.132-1.131a.561.561,0,0,1-.266-.717.541.541,0,0,1,.743-.248l1.977,1.05a.455.455,0,0,0,.613-.188l.011-.029,0-.006a.474.474,0,0,0-.2-.644l-1.109-.588a.561.561,0,0,1-.264-.72.543.543,0,0,1,.743-.248l1.225.651a.457.457,0,0,0,.621-.211l0-.006,0-.006a.457.457,0,0,0-.174-.632l-1.322-.7a.56.56,0,0,1-.263-.715.541.541,0,0,1,.743-.248l3.261,1.731-4.382,8.256-1.208-2.2A.513.513,0,0,0,133.184,263.074Z" transform="translate(-131.92 -254.088)" />
          <path className="b" d="M215.705,221.248l4.382,8.256-3.979-.368-1.926,3.5-4.382-8.256Z" transform="translate(-206.746 -221.248)" />
        </g>
        <path className="a" d="M215.219,263.089a.559.559,0,0,1,.263-.716l.252-.134a.539.539,0,0,0-.519-.945l-.713.378a.45.45,0,0,1-.61-.189l-.018-.034a.425.425,0,0,1,.164-.6l2.132-1.132a.561.561,0,0,0,.266-.717.541.541,0,0,0-.743-.248l-1.977,1.05a.455.455,0,0,1-.613-.188l-.011-.029,0-.006a.474.474,0,0,1,.2-.644l1.109-.588a.561.561,0,0,0,.264-.72.543.543,0,0,0-.743-.248l-1.226.652a.457.457,0,0,1-.621-.211l0-.006,0-.006a.457.457,0,0,1,.174-.632l1.322-.7a.56.56,0,0,0,.263-.715.541.541,0,0,0-.743-.248l-3.261,1.731,4.382,8.256,1.208-2.2A.522.522,0,0,1,215.219,263.089Z" transform="translate(-163.55 -245.428)" />
        <ellipse className="c" cx="7.322" cy="7.322" rx="7.322" ry="7.322" transform="translate(40.751 0)" />
        <path className="d" d="M77.981,19.948h-4.64a.659.659,0,0,1-.657-.657l.005-.045v-.01a.686.686,0,0,1,.687-.692h3.216a.813.813,0,0,0,.827-.742.786.786,0,0,0-.782-.822H73.231a.663.663,0,0,1-.652-.692v-.02a.663.663,0,0,1,.652-.692H76.8a.812.812,0,0,0,.822-.737.783.783,0,0,0-.782-.822h-2.61a7.321,7.321,0,0,0,0,13.542H77.54a.812.812,0,0,0,.822-.737A.783.783,0,0,0,77.581,26H73.81a.78.78,0,0,1-.779-.822.81.81,0,0,1,.823-.738h1.462a.781.781,0,0,0-.023-1.562H73.078a.652.652,0,0,1-.652-.657v-.055a.617.617,0,0,1,.617-.657h4.894a.813.813,0,0,0,.827-.737A.784.784,0,0,0,77.981,19.948Z" transform="translate(-28.916 -13.466)" />
        <path className="e" d="M127.81,63.892a5.226,5.226,0,1,1,5.226-5.226A5.232,5.232,0,0,1,127.81,63.892Z" transform="translate(-79.738 -51.345)" />
        <path className="f" d="M233.636,59.035a5.229,5.229,0,0,0-4.926-5.211h-.487a.619.619,0,0,0-.627.562.6.6,0,0,0,.6.627h2.876a.6.6,0,0,1,.594.627.618.618,0,0,1-.628.563h-1.115a.6.6,0,0,0,.017,1.191h1.69a.5.5,0,0,1,.5.5v.041a.47.47,0,0,1-.47.5H227.92a.62.62,0,0,0-.631.562.6.6,0,0,0,.6.627h3.538a.5.5,0,0,1,.5.5l0,.035v.008a.523.523,0,0,1-.524.528h-2.453a.621.621,0,0,0-.631.566.6.6,0,0,0,.6.627h2.6a.506.506,0,0,1,.5.528v.015a.506.506,0,0,1-.5.528h-2.718a.619.619,0,0,0-.627.562.6.6,0,0,0,.6.627h.717A5.235,5.235,0,0,0,233.636,59.035Z" transform="translate(-180.337 -51.714)" />
        <path className="g" d="M161.836,92.263h-2.542l-.786-2.418a.337.337,0,0,0-.642,0l-.785,2.418h-2.542a.337.337,0,0,0-.2.61l2.056,1.494-.785,2.418a.337.337,0,0,0,.519.377l2.056-1.494,2.056,1.494a.337.337,0,0,0,.519-.377l-.785-2.418,2.056-1.494A.337.337,0,0,0,161.836,92.263Z" transform="translate(-110.115 -86.098)" />
      </g>
    </svg>
  );
};

Medal.defaultProps = universalSettings;

export const Pencil = ( { className, dataAttribute, height }: PropsWithAttribute ) => (
  <svg viewBox="0 0 15.073 15" className={ className } data-icon="pencil" data-name={ dataAttribute } height={ height } aria-hidden="true">
    <g data-name={ dataAttribute } transform="translate(-0.001 -1.289)">
      <path data-name={ dataAttribute } d="M9.374,3.792,12.44,6.858,4.678,14.62,1.614,11.554Zm5.393-.74L13.4,1.685a1.357,1.357,0,0,0-1.917,0l-1.31,1.31,3.066,3.066,1.528-1.528A1.045,1.045,0,0,0,14.767,3.053ZM.009,15.864a.349.349,0,0,0,.422.415l3.417-.828L.784,12.384Z" transform="translate(0)" />
    </g>
  </svg>
);

Pencil.defaultProps = {
  className: null,
  dataAttribute: 'pencil',
  height: '15px',
};

type PlusProps = {
  className?: string | null,
  dataAttribute: string,
  fillColor: string,
  height?: string,
  width?: string,
};

export const Plus = ( {
  className, dataAttribute, fillColor, height, width,
}: PlusProps ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="plus" data-name={ dataAttribute } width={ width } height={ height } aria-hidden="true">
    <path data-name={ dataAttribute } fill={ `${ fillColor }` } d="M848 474H550V152h-76v322H176c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h298v322h76V550h298c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
  </svg>
);

Plus.defaultProps = {
  ...universalSettings,
  dataAttribute: 'plus',
  fillColor: '#999999',
};

type PositionProps = {
  height?: string | null,
  position: number,
  width?: string | null,
};

export const PositionBadge = ( { height, width, position }: PositionProps ) => (
  <svg viewBox="0 0 16 17" className={ style.container } data-icon="position-badge" width={ width } height={ height } aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <title>
      Position&nbsp;
      { position + 1}
    </title>
    <circle id="Ellipse_53" data-name="Ellipse 53" className={ style.circle__one } cx="8" cy="8" r="8" transform="translate(0 1)"/>
    <text data-name={ `position-${ position + 1 }` } className={ style.circle__two } transform="translate(5 13)">
      <tspan x="0" y="0">
        { position + 1 }
      </tspan>
    </text>
  </svg>
);

PositionBadge.defaultProps = {
  width: null,
  height: '22px',
};

export const Right = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="right" width={ width } height={ height } aria-hidden="true">
    <title>
      Right
    </title>
    <path fill="currentColor" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
  </svg>
);

Right.defaultProps = universalSettings;

export const Search = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="search" width={ width } height={ height } fill="currentColor" aria-hidden="true">
    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
  </svg>
);

Search.defaultProps = {
  className: null,
  height: '18px',
  width: '18px',
};

export const Shopfront = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="shop-front" width={ width } height={ height } aria-hidden="true">
    <title>
      Branch Statistic Icon
    </title>
    <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z" />
  </svg>
);

Shopfront.defaultProps = universalSettings;

export const UpArrow = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="up-arrow" width={ width } height={ height } aria-hidden="true">
    <title>
      Up Arrow Icon
    </title>
    <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
  </svg>
);

UpArrow.defaultProps = universalSettings;

export const User = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="users" width={ width } height={ height } aria-hidden="true">
    <title>
      User Icon
    </title>
    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
  </svg>
);

User.defaultProps = {
  className: null,
  height: '100%',
  width: '100%',
};

export const Users = ( { className, height, width }: Props ) => (
  <svg viewBox="64 64 896 896" className={ className } data-icon="users" width={ width } height={ height } aria-hidden="true">
    <title>
      Users Icon
    </title>
    <path d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" />
  </svg>
);

Users.defaultProps = universalSettings;
