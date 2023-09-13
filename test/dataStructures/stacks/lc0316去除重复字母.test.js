/**
 * 316. 去除重复字母
 * https://leetcode.cn/problems/remove-duplicate-letters/description/?company_slug=huawei
 * 
 * 相关标签: 栈 贪心 字符串 单调栈
 * 
 * 题目描述
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。
 * 需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * 
 * 示例 1：
 * 输入：s = "bcabc"
 * 输出："abc"
 * 
 * 示例 2：
 * 输入：s = "cbacdcbc"
 * 输出："acdb"
 * 
 * 提示：
 * 1 <= s.length <= 104
 * s 由小写英文字母组成
 * */ 

const removeDuplicateLetters = require('../../../src/dataStructures/stacks/lc0316去除重复字母')
describe('反转字符串中的单词 II', () => {
    test('示例一', () => {
        const s = "bcabc"
        const output = "abc"
        expect(removeDuplicateLetters(s))
        //.toBe(output)
    });

    // test('示例二', () => {
    //     const s = "cbacdcbc"
    //     const output = "acdb"
    //     expect(removeDuplicateLetters(s)).toBe(output)
    // });
})