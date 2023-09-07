/**
 * 415. 字符串相加
 * https://leetcode.cn/problems/add-strings/description/?envType=study-plan-v2&envId=huawei-2023-fall-sprint
 * 
 * 相关标签：数学 字符串 模拟
 * 
 * 题目描述
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 示例 1：
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 示例 2：
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 示例 3：
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 提示：
 * 1 <= num1.length, num2.length <= 104
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * */ 

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = require('../../../src/dataStructures/string/lc0415字符串相加')

describe('同构字符串', () => {
    test('示例一', () => {
        const num1 = "11", num2 = "123"
        const output = "134";
        expect(addStrings(num1, num2)).toBe(output);
    });

    test('示例二', () => {
        const num1 = "456", num2 = "77"
        const output = "533";
        expect(addStrings(num1, num2)).toBe(output);
    });

    test('示例三', () => {
        const num1 = "0", num2 = "0"
        const output = "0";
        expect(addStrings(num1, num2)).toBe(output);
    });

    test('示例四', () => {
        const num1 = "9333852702227987", num2 = "85731737104263"
        const output = "9419584439332250";
        expect(addStrings(num1, num2)).toBe(output);
    });

    test('示例五', () => {
        const num1 = "1", num2 = "9"
        const output = "10";
        expect(addStrings(num1, num2)).toBe(output);
    });

    test('示例六', () => {
        const num1 = "09", num2 = "99"
        const output = "108";
        expect(addStrings(num1, num2)).toBe(output);
    });
})