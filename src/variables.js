import variables from './scssVariables.json'

const STRING = 'mktoString'
const COLOR = 'mktoColor'
const LINK = 'https://www.google.com'

const SCSSbtnBackgroundDefault = variables.$btnBackgroundDefault.value.hex
const SCSSbtnColorDefault = variables.$btnColorDefault.value.hex

const mktoVariables = {
  SCSSbtnBackgroundDefault: {
    class: COLOR,
    name: 'Button Color',
    default: SCSSbtnBackgroundDefault,
  },
  SCSSbtnColorDefault: {
    class: COLOR,
    name: 'Button Text Color',
    default: SCSSbtnColorDefault,
  },
  button1: {
    class: STRING,
    name: 'Button 1 Link',
    default: LINK,
  },
  button1Text: {
    class: STRING,
    name: 'Button 1 Text',
    default: 'BUTTON 1',
  },
  button2: {
    class: STRING,
    name: 'Button 2 Link',
    default: LINK,
  },
  button2Text: {
    class: STRING,
    name: 'Button 2 Text',
    default: 'BUTTON 2',
  },
}

export default mktoVariables
