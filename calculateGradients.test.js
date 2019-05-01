const {
  calculateGradientValue,
  calculateGradients
} = require('./calculateGradients')

const minColor = [0, 0, 0]
const maxColor = [255, 255, 255]
const middleColor = [127, 127, 127]

test(`'calculateGradientValue' testing`, () => {
  const resMax = calculateGradientValue(100, 100, minColor, maxColor)
  const resMin = calculateGradientValue(0, 100, minColor, maxColor)
  const resMiddle = calculateGradientValue(50, 100, minColor, maxColor)
  expect(resMax).toEqual(maxColor)
  expect(resMin).toEqual(minColor)
  expect(resMiddle).toEqual(middleColor)
})

test(`'calculateGradients' testing`, () => {
 const gradients = calculateGradients({values: [0, 50, 100], minColor: '#000', maxColor: '#fff'})
 expect(gradients[0].color).toEqual('#000000')
 expect(gradients[1].color).toEqual('#7f7f7f')
 expect(gradients[2].color).toEqual('#ffffff')
})
