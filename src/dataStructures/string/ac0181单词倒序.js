/**
 * 题目0181-单词倒序
 * 相关标签：字符串 栈
 * 
 * 题目描述：
 * 输入单行英文句子，里面包含英文字母，空格以及`,` `.` `?` 三种标点符号，请将句子内每个单词进行倒序，并输出倒序后的语句。
 * 
 * 输入描述
 * 输入字符串`S`，`S`的长度`1 <= N <= 100`
 * 
 * 输出描述
 * 输出逆序后的字符串
 * 
 * 备注
 * `标点符号左右的空格 >= 0`，`单词间空格 > 0`
 * 
 * 示例一
 * 输入
 * yM eman si boB.
 * 输出
 * My name is Bob.
 * 示例二
 * 输入
 * woh era uoy ? I ma enif.
 * 
 * 输出
 * how are you ? I am fine.
 * 
 * 思路
 * 遍历字符串，遇到非符号压入栈；遇到符号，将栈中元素全部出栈覆盖原有字符串，并跳过符号开始需要下一个乱序单词。
 * */

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (s) {
    let reverseS = '';
    let stackS = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ' || s[i] == ',' || s[i] == '.' || s[i] == '?') {
            console.log('stackS--', stackS)
            // 特殊符号位置不变
            reverseS = reverseS + stackS + s[i]
            stackS = ''
        } else {
            stackS = s[i] + stackS
        }
    }
    rl.close();
})