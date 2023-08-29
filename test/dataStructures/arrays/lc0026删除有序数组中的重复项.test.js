/**
 * 26. 删除有序数组中的重复项
 * 给你一个升序排列的数组 nums，请你原地删除重复出现的元素，使每个元素只出现一次,返回删除后数组的新长度。
 * 元素的相对顺序应该保持一致。然后返回nums中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。
 * nums 的其余元素与 nums 的大小不重要。返回 k 。
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 * 双指针
*/

/**
 * 相关标签
 * 数组 双指针
 * */ 

const removeDuplicates = require('../../../src/dataStructures/arrays/lc0026删除有序数组中的重复项');

describe('删除有序数组中的重复项', function () {
    test('示例一', () => {
        let nums = [1,1,2]
        expect(removeDuplicates(nums)).toBe(2);
    });

    test('示例二', () => {
        let nums = [0,0,1,1,1,2,2,3,3,4]
        expect(removeDuplicates(nums)).toBe(5);
    });
});