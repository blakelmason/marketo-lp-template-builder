import sass from 'node-sass'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './src/App'
import fs from 'fs'
import Handlebars from 'handlebars'
const sassExtract = require('sass-extract')

const rendered = sassExtract.renderSync({
  file: './src/scss/mktoVariables.scss',
})

const css = rendered.vars.global

fs.writeFileSync(__dirname + '/src/scssVariables.json', JSON.stringify(css))

import mktoVariables from './src/variables'

let buildCss = sass.renderSync({ file: './build/mkto.scss' }).css.toString()

for (const key in mktoVariables) {
  if (key.substring(0, 4) === 'SCSS') {
    const regexp = new RegExp(mktoVariables[key].default, 'gi')
    buildCss = buildCss.replace(regexp, `\${${key}}`)
  }
}

const baseCss = sass
  .renderSync({ file: './src/scss/style.scss' })
  .css.toString()

let reactMarkup = ReactDOM.renderToString(<App />)

const htmlIndex = fs.readFileSync('./build/templates/index.html', 'utf-8')
const template = Handlebars.compile(htmlIndex)
const compiled = template({
  mktoVariables,
  body: reactMarkup,
  css: `<style>
  ${buildCss}

  ${baseCss}
  </style>`,
})
fs.writeFileSync('./build/index.html', compiled)
