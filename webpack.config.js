const path = require('path');

module.exports = {
    output: {
      publicPath: argv.mode === 'production' ? '/mywebsite' : '/',
  }
}