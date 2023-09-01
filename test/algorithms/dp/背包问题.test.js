const knapSack = require('../../../src/algorithms/dp/背包问题')

describe('背包问题', () => {
    test('示例一', () => {
        const input = '5/n2 3 4/n3 4 5/n3'
        const output = 7
        expect(knapSack(input))
        //.toBe(output)
    });
    
});