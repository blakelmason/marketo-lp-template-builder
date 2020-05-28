import variables from './sassVariables.json'

const STRING = 'mktoString'
const COLOR = 'mktoColor'
const LINK = 'https://www.google.com'

const sections = 1
const sectionsObj = {}
for (let i = 0; i < sections; i++) {
  const number = i + 1
  sectionsObj[`SASSshowHideSection${number}`] = {
    class: 'mktoBoolean',
    mktoName: `Section ${number} Show/Hide`,
    default: 'true',
    true_value: 'block',
    false_value: 'none',
    false_value_name: 'Hide',
    true_value_name: 'Show',
  }
}

const mktoVariables = {
  ...sectionsObj,
  SASSbtnBackgroundDefault: {
    class: COLOR,
    mktoName: 'Button Color',
    default: variables.$btnBackgroundDefault.value.hex,
  },
  SASSbtnColorDefault: {
    class: COLOR,
    mktoName: 'Button Text Color',
    default: variables.$btnColorDefault.value.hex,
  },
  SASSbtnBorderRadiusDefault: {
    class: STRING,
    mktoName: 'Button Border Radius',
    default: variables.$btnBorderRadiusDefault.value,
  },
  button1: {
    class: STRING,
    mktoName: 'Button 1 Link',
    default: LINK,
  },
  button1Text: {
    class: STRING,
    mktoName: 'Button 1 Text',
    default: 'BUTTON 1 TEXT',
  },
}

export default mktoVariables
