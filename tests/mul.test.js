const mul = require('../src/mul')

it('should return accurate result', () => {
    const result = mul(5,5)
    expect(result).toBe(25)
})