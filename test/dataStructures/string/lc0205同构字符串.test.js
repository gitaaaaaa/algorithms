/**
 * 205. 同构字符串
 * https://leetcode.cn/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=huawei-2023-fall-sprint
 * 
 * 相关标签：字符串 哈希表
 * 
 * 题目描述：
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。
 * 不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 
 * 示例 1:
 * 输入：s = "egg", t = "add"
 * 输出：true
 * 示例 2：
 * 
 * 输入：s = "foo", t = "bar"
 * 输出：false
 * 
 * 示例 3：
 * 输入：s = "paper", t = "title"
 * 输出：true
 * 
 * 提示：
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 * */

const isIsomorphic = require('../../../src/dataStructures/string/lc0205同构字符串')

describe('同构字符串', () => {
    test('示例一', () => {
        const s = "egg", t = "add";
        const output = true;
        expect(isIsomorphic(s, t)).toBe(output);
    });

    test('示例二', () => {
        const s = "foo", t = "bar";
        const output = false;
        expect(isIsomorphic(s, t)).toBe(output);
    });

    test('示例三', () => {
        const s = "paper", t = "title"
        const output = true;
        expect(isIsomorphic(s, t)).toBe(output);
    });

    test('示例四', () => {
        const s = "badc", t = "baba"
        const output = false;
        expect(isIsomorphic(s, t)).toBe(output);
    });
});

