/**
 * 1240. 铺瓷砖
 * https://leetcode.cn/problems/tiling-a-rectangle-with-the-fewest-squares/description/?company_slug=huawei
 * 相关标签: 回溯
 * 
 * 你是一位施工队的工长，根据设计师的要求准备为一套设计风格独特的房子进行室内装修。
 * 房子的客厅大小为 n x m，为保持极简的风格，需要使用尽可能少的 正方形 瓷砖来铺盖地面。
 * 假设正方形瓷砖的规格不限，边长都是整数。
 * 请你帮设计师计算一下，最少需要用到多少块方形瓷砖？
 * 
 * 示例1:
 * 输入：n = 2, m = 3
 * 输出：3
 * 解释：3 块地砖就可以铺满卧室。
 * 2 块 1x1 地砖
 * 1 块 2x2 地砖
 * 
 * 示例 2：
 * 输入：n = 5, m = 8
 * 输出：5
 * 
 * 示例 3：
 * 输入：n = 11, m = 13
 * 输出：6
 * */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function (n, m) {
    console.log('n, m---', n, m)
    let min = 1; // 最多

    


    function splitRectangle(width, height) {
        console.log(width, height)

        for(let i = height; i < height/2; i--) {
            console.log(height)
        }

        // const temp = maxH - minW
        // maxH = minW
        // minW = temp
        // minTmp++
    }
   
    // while (n < m || m > n) {
        let minW, maxH;
        if (n < m) {
            minW = n
            maxH = m
        } else {
            minW = m
            maxH = n
        }

        for(let i = min; i <= 1; i = i%2) {
            console.log(i)
        }
        // min = Math.min(min,splitRectangle(maxH, minW))
    //     break
    // }
    // console.log('minTmp',minTmp)

    if (n == m) {
        return min
    } 
    return min
};

module.exports = tilingRectangle