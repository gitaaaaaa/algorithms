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




/**
 * 
 * 方法1 暴力求解 - 复杂度分析
 * - 时间复杂度O(n^3) 这里n为字符串的长度
 * - 空间复杂度O(1), 只用到常数个临时变量
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let len = s.length;
//     if (len < 2) {
//         return s
//     }

//     let maxLen = 1; // 最长回文子串的的长度
//     let begin = 0; // 最长回文子串的的下标
//     let charArray = s.split('');
//     console.log('charArray--', charArray)

//     // 枚举所有长度严格大于1的子串， charArray[i,j]
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (j - i + 1 > maxLen && validPalindromic(charArray, i, j)) {
//                 maxLen = j - i + 1;
//                 begin = i;
//             }
//         }
//     }
//     return s.substring(begin, begin + maxLen)
// };

// // 验证子串s[left...right]是否为回文串
// function validPalindromic(charArray, left, right) {
//     while (left < right) {
//         if (charArray[left] != charArray[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }


/**
 * 
 * 方法2 中心扩散 - 复杂度分析
 * - 时间复杂度O(n^2) 这里n为字符串的长度
 * - 空间复杂度O(1), 只用到常数个临时变量
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let len = s.length;
//     if (len < 2) {
//         return s
//     }

//     let maxLen = 1; // 最长回文子串的的长度
//     let begin = 0; // 最长回文子串的的下标
//     let charArray = s.split('');
//     // 枚举所有长度严格大于1的子串， charArray[i,j]
//     for (let i = 0; i < len - 1; i++) {
//         let oddLen = expandAroundCenter(charArray, i,i) // 奇数
//         let evenLen = expandAroundCenter(charArray, i,i+1)// 偶数
//         let curMaxLen = Math.max(oddLen, evenLen)
//         if(curMaxLen > maxLen) {
//             maxLen = curMaxLen
//             begin = i - (maxLen-1)/2
//         }
//     }
//     return s.substring(begin, begin + maxLen)
// };

// // 验证子串s[left...right]是否为回文串
// function expandAroundCenter(charArray, left, right) {
//     while (left >=0 && right < charArray.length) {
//         if (charArray[left] == charArray[right]) {
//             left--
//             right++
//         } else {
//             break
//         }
        
//     }
//     return right - left - 1
// }

// module.exports = longestPalindrome

/**
 * 方法3 动态规划 - 复杂度分析
 * - 时间复杂度
 * - 空间复杂度O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // let len = s.length;
    // if (len < 2) {
    //     return s
    // }
    // let maxLen = 1; // 最长回文子串的的长度
    // let begin = 0; // 最长回文子串的的下标
    // let charArray = s.split('');
    // // 枚举所有长度严格大于1的子串， charArray[i,j]
    // for (let i = 0; i < len - 1; i++) {
    //     let oddLen = expandAroundCenter(charArray, i,i); // 奇数
    //     let evenLen = expandAroundCenter(charArray, i,i+1); // 偶数
    //     let curMaxLen = Math.max(oddLen, evenLen);
    //     if(curMaxLen > maxLen) {
    //         maxLen = curMaxLen
    //         begin = i - (maxLen-1)/2
    //     }
    // }
    // return s.substring(begin, begin + maxLen)
};

// 验证子串s[left...right]是否为回文串
function expandAroundCenter(charArray, left, right) {
    // while (left >=0 && right < charArray.length) {
    //     if (charArray[left] == charArray[right]) {
    //         left--
    //         right++
    //     } else {
    //         break
    //     }
    // }
    // return right - left - 1
}

module.exports = longestPalindrome