import { Player } from "../src/Player";
import { subtractDate, hexToRGB, hexToRGB2, getAverageAge } from "../src/sample";

describe('substract date', () => {
  it('subtract date ', () => {
    const value = subtractDate(new Date('2002-02-12'), new Date('2002-02-11'));
    expect(value).toEqual(24);
  })
})

describe('hex to RGB', () => {
  it('hex to RGB', () => {
    const value = hexToRGB("9D")
    expect(value).toEqual(157)
  })
})

describe('black or colored', () => {
  it('black or colored', () => {
    const value = hexToRGB2("ZZZZZZ")
    expect(value).toEqual("#FFFFFF")
  })
})

// describe('Average Age', () => {
//   it('Average Age', () => {
//     const value = getAverageAge(Player[])
//     expect(value).toEqual()
    

//   })
// })
