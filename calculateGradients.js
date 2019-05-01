const {
  convertRgbToHex,
  convertHexToRgb
} = require('./formatUtils')

function getNormalizedValue (value, max) {
  return parseInt((Math.round((value / max) * 100)).toFixed(0))
}

function getColorValue (value, min, max) {
  return parseInt(min + (value * (max - min)) / 100).toFixed(0)
}

function calculateGradientValue (value, maxValue, minColorArray, maxColorArray) {
  const [minr, ming, minb] = minColorArray
  const [maxr, maxg, maxb] = maxColorArray
  const normalizedValue = getNormalizedValue(value, maxValue)

  const redvalue = getColorValue(normalizedValue, minr, maxr)
  const greenvalue = getColorValue(normalizedValue, ming, maxg)
  const bluevalue = getColorValue(normalizedValue, minb, maxb)
  return [redvalue, greenvalue, bluevalue].map(x => parseInt(x))
}

function getHexValue (valuesArray) {
  const [redvalue, greenvalue, bluevalue] = valuesArray
  return convertRgbToHex(redvalue, greenvalue, bluevalue)
}

function calculateGradients (params) {
  const max = Math.max(...params.values)
  const minColorArray = convertHexToRgb(params.minColor || '#ed0e49')
  const maxColorArray = convertHexToRgb(params.maxColor || '#25960f')
  const gradients = params.values.map(v => {
    return {
      value: v,
      color: getHexValue(
        calculateGradientValue(v, max, minColorArray, maxColorArray))
    }
  })
  return gradients
}

module.exports = {
  calculateGradientValue,
  calculateGradients
}
