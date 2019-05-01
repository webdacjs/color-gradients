const {convertRgbToHex, convertHexToRgb} = require('./formatUtils')
const {calculateGradients} = require('./calculateGradients')
const ch = require('console-hue')

function getGradients (params) {
  if (!params || !params.values) {
    ch.error('values parameter was not provided in the arguments!')
    ch.cyan('usage: getGradients({values: [v1, v2, v3], maxColor: hexvalue, minColor: hexvalue})')
    return
  }
  return calculateGradients(params)
}

module.exports = {
  convertRgbToHex,
  convertHexToRgb,
  getGradients
}
