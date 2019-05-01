const {
  convertRgbToHex,
  convertHexToRgb,
  validateHex,
  isAnObject
} = require('./formatUtils')
const soa = require('sort-objects-array')

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

function getMaxValue (vals, arrObjVal) {
  const values = arrObjVal ? arrObjVal.map(x => x.value) : vals
  return Math.max(...values)
}

function calculateGradients (params) {
  let valuesArrayObj
  let valuesObject = isAnObject(params.values)
  if (valuesObject) {
    valuesArrayObj = soa(params.values, 'key')
  }

  const max = getMaxValue(params.values, valuesArrayObj)
  const minColorArray = validateHex(params.minColor)
    ? convertHexToRgb(params.minColor)
    : convertHexToRgb('#ed0e49')
  const maxColorArray = validateHex(params.maxColor)
    ? convertHexToRgb(params.maxColor)
    : convertHexToRgb('#25960f')

  const iteratevalue = valuesObject ? valuesArrayObj : params.values

  const gradients = iteratevalue.map((x, i) => {
    const v = isAnObject(x) ? x.value : x
    return {
      label: x.key || i,
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
