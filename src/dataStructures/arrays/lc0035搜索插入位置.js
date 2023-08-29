/**
 * 题目: 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * */

/**
 * 相关标签
 * 数组, 二分查找
 * */ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // left 指向插入的位置
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid =  Math.floor((left+right)/2)
        if(target <= nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1;
        }
    }
    return left
};

module.exports = searchInsert