/**
 * 56. 合并区间
 * https://leetcode.cn/problems/merge-intervals/description/
 * 
 * 相关标签：数组 排序
 * 
 * 题目描述：
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 示例 2：
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *  
 * 提示：
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 * */

/**
 * 排序 遍历合并 贪心思想
 * */

var merge = function (intervals) {
    // 如果区间数量小于等于1，直接返回，不需要合并
    if (intervals.length <= 1) {
        return intervals
    }

    // 第一步： 根据区间的起始位置进行排序
    intervals.sort((a, b) => a[0] - b[0])

    // 第二步：创建一个新数组来存储合并后的区间
    let merged = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        // 检查当前区间是否与已合并区间的最后一个区间有重叠部分
        if (intervals[i][0] <= merged[merged.length - 1][1]) {
            // 有重叠，更新已合并区间的结束位置为当前区间的结束位置和已合并区间的结束位置的最大值
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1])
        } else {
            // 没有重叠，将当前区间添加到已合并区间数组中
            merged.push(intervals[i])
        }
    }
    return merged
};

module.exports = merge