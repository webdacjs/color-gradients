const {
  convertRgbToHex,
  normalizeHex,
  convertHexToRgb
} = require('./formatUtils')

test(`'convertRgbToHex' testing`, () => {
  expect(convertRgbToHex(0, 0, 0)).toBe('#000000')
  expect(convertRgbToHex(255, 0, 0)).toBe('#ff0000')
  expect(convertRgbToHex(0, 255, 0)).toBe('#00ff00')
  expect(convertRgbToHex(0, 0, 255)).toBe('#0000ff')
})

test(`'normalizeHex' testing`, () => {
  expect(normalizeHex('#fff')).toBe('#ffffff')
  expect(normalizeHex('#FFF')).toBe('#ffffff')
  expect(normalizeHex('FFF')).toBe('#ffffff')
  expect(normalizeHex('ffffff')).toBe('#ffffff')
})

test(`'normalizeHex' testing`, () => {
  expect(convertHexToRgb('#fff')).toEqual([255, 255, 255])
  expect(convertHexToRgb('#FFFFFF')).toEqual([255, 255, 255])
})
