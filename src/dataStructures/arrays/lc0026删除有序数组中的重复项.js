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

function removeDuplicates(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    // 快指针扫描, 非重复的元素
    // 慢指针观察, 指向可覆盖的位置
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

module.exports = removeDuplicates