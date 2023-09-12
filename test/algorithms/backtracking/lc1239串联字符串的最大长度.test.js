/**
 * 1239. 串联字符串的最大长度
 * https://leetcode.cn/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/?envType=study-plan-v2&envId=huawei-2023-fall-sprint
 * 
 * 相关标签：位运算 数组 字符串 回溯
 * 
 * 题目描述：
 * 给定一个字符串数组 arr，字符串 s 是将 arr 的含有不同字母的子序列字符串连接所得的字符串。
 * 请返回所有可行解 s 中最长长度。
 * 子序列是一种可以从另一个数组派生而来的数组，通过删除某些元素或不删除元素而不改变其余元素的顺序。
 * 
 * 示例 1：
 * 输入：arr = ["un","iq","ue"]
 * 输出：4
 * 解释：所有可能的串联组合是：
 * - ""
 * - "un"
 * - "iq"
 * - "ue"
 * - "uniq" ("un" + "iq")
 * - "ique" ("iq" + "ue")
 * 最大长度为 4。
 * 
 * 示例 2：
 * 输入：arr = ["cha","r","act","ers"]
 * 输出：6
 * 解释：可能的解答有 "chaers" 和 "acters"。
 * 
 * 示例 3：
 * 输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
 * 输出：26
 * 
 * 提示：
 * 1 <= arr.length <= 16
 * 1 <= arr[i].length <= 26
 * arr[i] 中只含有小写英文字母
 * */ 

const maxLength = require('../../../src/algorithms/backtracking/lc1239串联字符串的最大长度')

describe('串联字符串的最大长度', () => {
    test('示例一', () => {
        const arr = ["un","iq","ue"]
        const output = 4
        expect(maxLength(arr))
        //.toBe(output)
    });

    // test('示例二', () => {
    //     const arr = ["cha","r","act","ers"]
    //     const output = 6
    //     expect(maxLength(arr)).toBe(output)
    // });

    // test('示例三', () => {
    //     const arr = ["abcdefghijklmnopqrstuvwxyz"]
    //     const output = 26
    //     expect(maxLength(arr))
    //     //.toBe(output)
    // });

    // test('示例四', () => {
    //     const arr = ["aa", "bb"]
    //     const output = 0
    //     expect(maxLength(arr))
    //     //.toBe(output)
    // });

    // test('示例五', () => {
    //     const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]
    //     const output = 16
    //     expect(maxLength(arr))
    //     //.toBe(output)
    // });
});