const path = require( 'path' );

const mode = process.argv[2] === 'prod' ? 'production' : 'development';
module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
