// import React from 'react'
// import ReactDOM from 'react-dom/server'
// import App from './src/App'
import fs from 'fs'
// import variables from './src/variables'
// import Handlebars from 'handlebars'

// let reactMarkup = ReactDOM.renderToString(<App />)

// console.log(reactMarkup)

// const htmlIndex = fs.readFileSync('./index.html', 'utf-8')
// const template = Handlebars.compile(htmlIndex)
// const compiled = template({ variables, body: reactMarkup })
// fs.writeFileSync('build.html', compiled)

// fs.writeFileSync('body.html', ReactDOM.renderToStaticMarkup(<App />))
// const sass = require('node-sass')
// const test = sass.renderSync({ file: __dirname + '/template/src/style.scss' })
// console.log(test.css.toString())

// var sass = require('node-sass')
// var result = sass.renderSync({
//   file: __dirname + '/src/scss/index.scss',
// })

// console.log(result.css.toString())

import variables from './src/scss/mktoVariables.scss'
console.log(variables)
