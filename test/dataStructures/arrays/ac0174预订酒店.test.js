/**
 * 题目描述 
放暑假了，小明决定到某旅游景点游玩，他在网上搜索到了各种价位的酒店（长度为n的数组A），他的心理价位是x元，请帮他筛选出k个最接近x元的酒店（n>=k>0）,并由低到高打印酒店的价格。

输入描述
第一行：n, k, x
第二行：A[0] A[1] A[2]...A[n-1]

输出描述
从低到高打印筛选出的酒店价格

 * 
 * */
// 示例一
// 输入
// 10 5 6
// 1 2 3 4 5 6 7 8 9 10
// 输出
// 4 5 6 7 8
// 示例二
// 输入
// 10 4 6
// 10 9 8 7 6 5 4 3 2 1
// 输出
// 4 5 6 7
// 说明
// 数组长度n = 10，筛选个数k = 4，目标价位x = 6
// 当4和8距离x相同时，优先选择价格低的4

// 示例三
// 输入
// 6 3 1000
// 30 30 200 500 70 300
// 输出
// 200 300 500


const processHotalPrices = require('../../../src/dataStructures/arrays/ac0174预订酒店');

describe('预定酒店', function () {
    test('示例一', () => {
        let input = '10 5 6/n1 2 3 4 5 6 7 8 9 10';
        let expectedOutput = '4 5 6 7 8';
        expect(processHotalPrices(input))
        //.toBe(expectedOutput);
    });

    // test('示例二', () => {
    //     let input = '10 4 6/n10 9 8 7 6 5 4 3 2 1';
    //     let expectedOutput = '4 5 6 7';
    //     expect(processHotalPrices(input)).toBe(expectedOutput);
    // });

    // test('示例三', () => {
    //     let input = '6 3 1000/n30 30 200 500 70 300';
    //     let expectedOutput = '200 300 500';
    //     expect(processHotalPrices(input)).toBe(expectedOutput);
    // });
});