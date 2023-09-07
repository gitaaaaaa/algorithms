/**
 * 15. 三数之和
 * 
 * 相关标签：数组 双指针 排序
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
 * 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [0,1,-1] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 示例 2：
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 示例 3：
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 提示：
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    let n = nums.length;
    if (nums == null || n < 3) {
        return result
    }
    nums.sort((a, b) => a - b)// 对数组排序
    console.log('nums', nums)
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
            break
        } else if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        // 左右指针指向 nums[i] 后面的两端
        let L = i + 1;
        let R = n - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum == 0) {
                result.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                L++;
                R--;
            } else if (sum < 0) {
                L++
            } else if (sum > 0) {
                R--
            }
        }
    }
    console.log('result--', result)
    return result
};

module.exports = threeSum