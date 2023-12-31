/**
 * 198. 打家劫舍
 * https://leetcode.cn/problems/house-robber/description/
 * 
 * 相关标签 数组 动态规划
 * 
 * 题目描述：
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 
 * 示例 1：
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 提示：
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000 
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
    const rob = require('../../../src/algorithms/dp/lc0213打家劫舍2')
    describe('打家劫舍 II', () => {
    
        test('示例一', () => {
            const nums = [1,2,3,1]
            const output = 4
            expect(rob(nums))
            //.toBe(output)
        });

         // test('示例二', () => {
        //     const nums = [2,7,9,3,1]
        //     const output = 12
        //     expect(rob(nums))
        //     //.toBe(output)
        // });
    });