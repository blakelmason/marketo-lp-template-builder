import gulp from 'gulp'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './src/App'
import fs from 'fs'
import cheerio from 'cheerio'
import marketoVariables from './marketoVariables'
import sass from 'node-sass'
import Handlebars from 'handlebars'

const files = {
  marketoVariables: './marketoVariables.js',
  marketoCss: './marketoCss.scss',
  devCss: './generated/dev.scss',
  generatedCss: './generated/style.css',
  htmlTemplate: './templates/index.html',
  build: './build/index.html',
}

gulp.task('css', (cb) => {
  const cssVariables = require(files.marketoVariables)
  const variables = Object.keys(cssVariables)
    .map((variable) => `\$${variable}: ${cssVariables[variable].default};`)
    .join('\n')
  fs.writeFileSync(
    files.devCss,
    variables + '\n' + `@import '../marketoCss.scss';`
  )
  cb()
})

gulp.task('build', (cb) => {
  const metas = []
  const html = ReactDOM.renderToStaticMarkup(<App />)
  const $ = cheerio.load(html)

  $('.mkto-btn').each((i, el) => {
    const n = i + 1
    $(el).attr('href', `\${button${n}Link}`)
    $(el).text(`\${button${n}Text}`)
    const meta = (className, id, mktoName, defaultVal) =>
      `<meta class="${className}" id="${id}" mktoName="${mktoName}" default="${defaultVal}"  />`
    metas.push(
      meta(
        'mktoString',
        `button${n}Link`,
        `Button ${n} Link`,
        'https://google.com'
      )
    )
    metas.push(
      meta('mktoString', `button${n}Text`, `Button ${n} Text`, `BUTTON ${n}`)
    )
  })

  const showHideCssArr = []

  $('.show-hide').each((i, el) => {
    const n = i + 1
    const id = `show-hide-${n}`
    metas.push(
      `<meta class="mktoBoolean" id="${id}" mktoName="Show/Hide ${n}" default="true" true_value="block" false_value="none" false_value_name="Hide" true_value_name="Show">`
    )
    showHideCssArr.push(`.show-hide-${n} {
      display: \${${id}};
    }`)
    $(el).attr('class', id)
  })

  const classCounter = {
    mktoText: 0,
    mktoImg: 0,
    mktoForm: 0,
  }

  $('.mktoElement').each((i, el) => {
    const mktoEl = $(el).attr('class').split(' ')[0]
    classCounter[mktoEl]++
    const count = classCounter[mktoEl]
    $(el).attr('id', mktoEl + count)
    $(el).attr('mktoName', mktoEl.substr(4) + ' ' + count)
    $(el).attr('class', mktoEl)
  })

  for (const key in marketoVariables) {
    const {
      class: className,
      default: defaultVal,
      mktoName,
    } = marketoVariables[key]
    metas.push(
      `<meta class="${className}" id="${key}" mktoName="${mktoName}" default="${defaultVal}" >`
    )
  }

  const sassVariables = Object.keys(marketoVariables)
    .map((key) => `\$${key}: '\${${key}}';`)
    .join('\n')
  const marketoCss = fs.readFileSync(files.marketoCss, 'utf-8')
  const combinedCss = sassVariables + '\n' + marketoCss
  const renderedCss = sass.renderSync({ data: combinedCss }).css.toString()
  const finalCss = showHideCssArr.join('\n') + '\n' + renderedCss

  const htmlTemplate = fs.readFileSync(files.htmlTemplate, 'utf-8')
  const template = Handlebars.compile(htmlTemplate)
  const result = template({
    variables: metas.join('\n'),
    css: finalCss,
    body: $('body').html(),
  })

  fs.writeFileSync(files.build, result)

  cb()
})
