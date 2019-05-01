const getHex = hex => hex.length === 1 ? `0${hex}` : hex

function normalizeHex (hex) {
  const normalizedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase()
  }).replace('#', '')
  return `#${normalizedHex}`
}

function convertRgbToHex (red, green, blue) {
  const hexValues = [red, green, blue].map(c => getHex(
    parseInt(c).toString(16))).join('')
  return `#${hexValues}`
}

function convertHexToRgb (hex) {
  const hexSplit = normalizeHex(hex).substring(1).match(/.{2}/g)
  return hexSplit.map(h => parseInt(h, 16))
}

module.exports = {
  convertRgbToHex,
  normalizeHex,
  convertHexToRgb
}
