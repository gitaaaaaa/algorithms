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
var addStrings = function (num1, num2) {
    let res = "", i = num1.length - 1, j = num2.length - 1, carry = 0;
    while (i >= 0 || j >= 0) {
        let n1 = i >=0 ? Number(num1[i]):0;
        let n2 = j>=0? Number(num2[j]):0;
        let num = n1 + n2 + carry
        if (num < 10 || i == 0 && j == 0 || i<0&&j==0 || j<0 && i==0) {
            res = num + res
            carry = 0
        } else {
            res = num % 10 + res
            carry = 1
        }
        i--
        j--
    }
    return res
};

module.exports = addStrings