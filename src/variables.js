import variables from './scss/mktoVariables.scss'

const STRING = 'mktoString'
const COLOR = 'mktoColor'

const { buttonBackgroundColor, buttonTextColor } = variables

const defaults = {
  buttonBackgroundColor,
  buttonTextColor,
  logo:
    'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-cornell-cookson-logo-525x82.png',
}

const marketoVariables = {
  logo: {
    class: STRING,
    name: 'Logo Image',
  },
  buttonBackgroundColor: {
    class: COLOR,
    name: 'Button Background Color',
  },
  buttonTextColor: {
    class: COLOR,
    name: 'Button Text Color',
  },
}

for (const key in marketoVariables) {
  marketoVariables[key].default = defaults[key]
}

export default marketoVariables
