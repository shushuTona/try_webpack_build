const webpack = require('webpack');
const configFile = require('./webpack.config');

const compiler = webpack(configFile);
compiler.run((err, result) => {
    // console.log('err', err);
    // console.log('result', result);
});
