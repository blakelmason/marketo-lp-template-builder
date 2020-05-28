import sass from 'node-sass'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './src/App'
import fs from 'fs'
import Handlebars from 'handlebars'
import pick from 'lodash/pick'

//

const sassExtract = require('sass-extract')
const rendered = sassExtract.renderSync({
  file: './src/scss/defaults.scss',
})
const css = rendered.vars.global
fs.writeFileSync(__dirname + '/src/sassVariables.json', JSON.stringify(css))
import mktoVariables from './src/variables'

//

const SASSobj = pick(
  mktoVariables,
  Object.keys(mktoVariables).filter((key) => key.substring(0, 4) === 'SASS')
)

let sassVariablesFile = new String()
const sassVariables = []

for (const key in SASSobj) {
  sassVariables.push(`$${key.substring(4, key.length)}: #{${key}};`)
}

sassVariablesFile += sassVariables.join('\n') + `\n\n@import '../build.scss';`

fs.writeFileSync('./src/scss/generated/variables.scss', sassVariablesFile)

//

const showHideObj = pick(
  SASSobj,
  Object.keys(SASSobj).filter((key) => key.substring(0, 12) === 'SASSshowHide')
)

let showHide = []
for (const [i, key] of Object.keys(showHideObj).entries()) {
  showHide.push(`.show-hide-${i + 1} {
    display: $${key.substring(4, key.length)};
  }`)
}

fs.writeFileSync('./src/scss/generated/showHide.scss', showHide.join('\n'))

let buildCss = sass
  .renderSync({ file: './src/scss/generated/variables.scss' })
  .css.toString()
for (const key in SASSobj) {
  const regexp = new RegExp(key, 'gi')
  buildCss = buildCss.replace(regexp, `\${${key}}`)
}

//

const baseCss = sass.renderSync({ file: './src/scss/base.scss' }).css.toString()

//

let reactMarkup = ReactDOM.renderToString(<App />)
const htmlIndex = fs.readFileSync('./build/templates/index.html', 'utf-8')
const template = Handlebars.compile(htmlIndex)
Handlebars.registerHelper('variables', () => {
  let html = []
  for (const variable in mktoVariables) {
    let attributes = []
    for (const attribute in mktoVariables[variable]) {
      attributes.push(`${attribute}="${mktoVariables[variable][attribute]}"`)
    }
    attributes.push(`id="${variable}"`)
    attributes = attributes.join(' ')
    html.push(`<meta ${attributes}/>`)
  }
  html = html.join('\n')
  return html
})

//

const compiled = template({
  body: reactMarkup,
  css: `<style>
  ${buildCss}
  ${baseCss}
  </style>`,
})
fs.writeFileSync('./build/index.html', compiled)
