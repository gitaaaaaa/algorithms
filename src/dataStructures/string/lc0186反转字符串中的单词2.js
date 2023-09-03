/**
 * 186. 反转字符串中的单词 II
 * 
 * 相关标签：双指针，字符串
 * 
 * 给你一个字符数组 s ，反转其中 单词 的顺序。
 * 单词 的定义为：单词是一个由非空格字符组成的序列。s 中的单词将会由单个空格分隔。
 * 必须设计并实现 原地 解法来解决此问题，即不分配额外的空间。
 * 
 * 示例 1：
 * 输入：s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
 * 输出：["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
 * 
 * 示例 2：
 * 输入：s = ["a"]
 * 输出：["a"]
 * 
 * 提示：
 * 1 <= s.length <= 105
 * s[i] 可以是一个英文字母（大写或小写）、数字、或是空格 ' ' 。
 * s 中至少存在一个单词
 * s 不含前导或尾随空格
 * 题目数据保证：s 中的每个单词都由单个空格分隔
 * */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    s.reverse()
    const reverseFun  = (start,end) =>{
        while(start<end){
            [s[start],s[end]] = [s[end],s[start]]
            start++;
            end--;
        }
    }
    let start = 0
    for(let i =0; i<=s.length;i++){
        if(s[i] === ' ' || i === s.length){
          reverseFun(start,i-1)
          start = i +1
        }
    }
  };

/**
 * 双指针算法 
 * 时间复杂度 O(N)
 * 空间复杂度 O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
    const reverse = (start, end) => {
        while (start < end) {
            [s[start],s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    };

    const n = s.length;
    let start = 0;
    let end = 0;

    // 第一步：反转整个字符串
    reverse(0, n - 1);

    // 第二步：反转每个单词
    while (end < n) {
        // 找到单词的起始位置
        while (end < n && s[end] !== ' ') {
            end++;
        }
        // 反转单词
        reverse(start, end - 1);

        // 更新指针，跳过空格
        start = end + 1;
        end = start;
    }

    return s
};

module.exports = reverseWords