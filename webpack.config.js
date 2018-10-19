'use strict';

module.exports = {
  mode: 'production',
  entry: require.resolve('.'),

  node: {
    global: false,
  },

  output: {
    path: __dirname,
    libraryTarget: 'umd',
    library: 'Codebottle',
    filename: 'browser.js',
  },
};
