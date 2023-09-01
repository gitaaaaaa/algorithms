/**
 * 
 * 
 * */

/**
 * 解析 - 动态规划
 * 最优解决
 * 近似算法？？？  np完全问题
 * 背包问题
 * - 先解决子问题，再逐步解决大问题
 * - 原问题的最优解可以由其子问题的最优解组合而成
 * */ 
function minDiff(input) {
    let arr = input.trim().split(' ').map(Number)
    // 计算所有球员的战斗力之和
    let sum = arr.reduce((a, b) => a + b, 0);
    // 计算每个队伍的理想战斗力
    let half = Math.floor(sum / 2);
    console.log('arr, sum, half--', arr, sum, half)
    // 初始化动态规划数组
    let dp = new Array(half + 1).fill(0);
    console.log('dp---', dp)
    // 使用动态规划计算每个球员是否应该被分配到第一支队伍中
    for (let i = 0; i < arr.length; i++) {
        for (let j = half; j >= arr[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - arr[i]] + arr[i]);
        }
    }
    // 计算两个队伍的战斗力差值，并输出最小的差值
    console.log('sum - 2 * dp[half]', sum - 2 * dp[half])
    return sum - 2 * dp[half];
}

module.exports =minDiff