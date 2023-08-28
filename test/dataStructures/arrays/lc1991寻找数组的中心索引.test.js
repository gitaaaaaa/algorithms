// 示例 1：
// 输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

// 示例 2：
// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。

// 示例 3：
// 输入：nums = [2, 1, -1]
// 输出：0
// 解释：
// 中心下标是 0 。
// 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
// 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。

// 提示：
// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000


const pivotIndex = require('../../../src/dataStructures/arrays/lc1991寻找数组的中心索引');

describe('寻找数组的中心索引', function () {
    test('示例一', () => {
        let nums = [1, 7, 3, 6, 5, 6]
        expect(pivotIndex(nums)).toBe(3);
    });

    test('示例二', () => {
        let nums = [1, 2, 3]
        expect(pivotIndex(nums)).toBe(-1)
    });

    test('示例三', () => {
        let nums = [2, 1, -1]
        expect(pivotIndex(nums)).toBe(0)
    });
});