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

/**
 * @param {string[]} arr
 * @return {number}
 */

// 含有 不同字母 的 子序列
function noRepeatWord(word) {
    let isRepeat = false;
    let hashMap = new Map()
    for(let i = 0; i < word.length; i++) {
        if(hashMap.get(word[i])) {
            isRepeat = true
            break
        } else {
            hashMap.set(word[i],true)
        }
    }
    return isRepeat
}

var maxLength = function (arr) {
    let str = ""
    let maxLen = 0
    let noRepeatArr = [] // 不重复的数列
    // 拼接子序列
    for(let i = 0; i < arr.length;i++) {
        if(!noRepeatWord(arr[i])) {
            noRepeatArr.push(arr[i])
        }
    }

    for(let j = 0; j < noRepeatArr.length;j++) {
        let temp = str + noRepeatArr[i]
        if(!noRepeatWord(arr[i])) {
            console.log(temp)
            if(temp.length > maxLen) {
                str = temp
                maxLen = str.length
            }
        } else {
            j++
        }
    }
    console.log("noRepeatArr---",noRepeatArr)
    // 字符串不重复，才计算长度
    // if(!noRepeatWord(str)) {

    // }
};




// var maxLength = function (arr) {
//     console.log('arr---', arr)
//     let maxLen = 0
//     if (arr.length === 1) {
//         arr.push("")
//     }
//     let left = 0
//     let right = arr.length - 1
//     while (left < right) {
//         if ((arr[left] + arr[right]).length > maxLen && !fnnoRepeatWord(arr[left], arr[right])) {
//             maxLen = (arr[left] + arr[right]).length
//         }
//         if (arr[left].length > arr[right].length) {
//             right--
//         } else {
//             left++
//         }
//     }
//     // let maxLength
//     console.log('maxLen---', maxLen)
//     return maxLen
// };

module.exports = maxLength