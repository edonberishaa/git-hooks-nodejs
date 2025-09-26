const sum = require('../src/sum')

it('should return accurate result', () => {
    const result = sum(2,5)
    expect(result).toBe(7)
})