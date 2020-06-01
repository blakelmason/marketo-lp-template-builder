const fs = require('fs')

fs.watch(__dirname + '/src/scss/defaults.scss', () => {
  console.log('hi')
})
