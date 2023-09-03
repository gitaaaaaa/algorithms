/** 
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/description/
 * 
 * 相关标签：数组 二分查找
 * 
 * 题目描述：
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 示例 1:
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 
 * 示例 2:
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 * 
 * 示例 3:
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 * 
 * 提示:
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums 为 无重复元素 的 升序 排列数组
 * -104 <= target <= 104
 * */

const searchInsert = require('../../../src/dataStructures/arrays/lc0035搜索插入位置');

describe('搜索插入位置', function () {
    test('示例一', () => {
        let nums = [1,3,5,6], target = 5;
        expect(searchInsert(nums, target)).toBe(2);
    });

    test('示例二', () => {
        let nums = [1,3,5,6], target = 2;
        expect(searchInsert(nums, target)).toBe(1);
    });

    test('示例三', () => {
        let nums = [1,3,5,6], target = 7
        expect(searchInsert(nums,target)).toBe(4)
    });

    test('示例四', () => {
        let nums = [1,3], target = 2
        expect(searchInsert(nums,target)).toBe(1)
    });
});