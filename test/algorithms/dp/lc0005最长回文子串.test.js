/**
 * 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * */

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

/**
 * 相关标签
 * 字符串 动态规划
 * */


const longestPalindrome = require('../../../src/algorithms/dp/lc0005最长回文子串')
describe('最长回文子串', () => {
    test('示例一', () => {
        const input = 'babad'
        const output = 'bab' // or 'aba'
        expect(longestPalindrome(input)).toBe(output)
    });

    test('示例二', () => {
        const input = 'cbbd'
        const output = 'bb'
        expect(longestPalindrome(input)).toBe(output)
    });
});
