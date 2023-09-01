/**
 * 
 * 
 * */

/**
 * 解析 - 动态规划
 * 最优解决
 * 近似算法？？？  np完全问题
 * 背包问题
 * - 先解决子问题，再逐步解决大问题
 * - 原问题的最优解可以由其子问题的最优解组合而成
 * */
const minDiff = require('../../../src/algorithms/dp/ac0098篮球比赛')

describe('背包问题', () => {
    test('示例一', () => {
        const input = '10 9 8 7 6 5 4 3 2 1'
        const output = 1
        expect(minDiff(input))
        
        //.toBe(output)
    });

});