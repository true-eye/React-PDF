const path = require( 'path' );

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: path.join( __dirname, 'src' ),
      },
      // Styles
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[hash:base64:8]__[name]__[local]',
            },
          },
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // Over write Ant Design less variables and set our own less variables
                '@above-average': '#1ABC9C',
                '@average': '#3498DB',
                '@below-average': '#E74C3C',
                '@black': '#000',
                '@border-grey': '#707070',
                '@button-green': '#1ABC9C',
                '@dark-brown': '#CAB497',
                '@disabled': '#A7A8AB',
                '@error-red': '#FE0000',
                '@layout-body-background': '#F2F2F2',
                '@layout-header-background': '#FFF',
                '@light-brown': '#EBDFC8',
                '@ranking-brown': '#A68F64',
                '@shadow-color': 'rgba(0, 0, 0, 0.16)',
                '@smu-blue': '#27336F',
                '@text-black': '#000',
                '@transparent-brown': '#F7F2EC',
                '@white': '#FFF',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // Over write Ant Design less variables and set our own less variables
                // '@primary-color': '#CAB497', // For week picker
                // '@primary-1': '#EBDFC8',
                // '@item-hover-bg': '#CAB497',
                '@layout-body-background': '#f2f2f2',
                '@layout-header-background': '#FFF',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[hash:base64:8]__[name]__[local]',
            },
          },
          {
            loader: 'postcss-loader', // postcss loader so we can use autoprefixer
            options: {
              config: {
                path: 'postcss.config.js',
              },
            },
          },
        ],
      },
      // Images
      {
        test: /\.(png|jpg|gif)$/,
        use: [ {
          loader: 'file-loader',
          options: {},
        } ],
      },

    ],
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    historyApiFallback: {
      index: './index.html',
    },
    overlay: {
      errors: true,
      warnings: true,
    },
  },
};
