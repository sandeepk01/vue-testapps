// This is the configuration file for style guide generator
const path = require('path');
const projectRoot = path.resolve(__dirname, './')
module.exports = {
    require: ['babel-polyfill'],
    components: 'src/components/**/*.vue',
    webpackConfig: require('./build/webpack.base.conf.js'),
    styleguideDir: 'guide',
    verbose: false,
    vuex: 'src/state/store.js'
};
