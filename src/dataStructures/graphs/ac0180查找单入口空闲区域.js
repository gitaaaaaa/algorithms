/**
 * 题目 查找单入口空闲区域
 * 给定一个 m × n 的矩阵，由若干字符 X 和 O 构成，
 * X表示该处已被占据，O表示该处空闲，请找到最大的单入口空闲区域。
 * 空闲区域是由连通的O组成的区域，位于边界的O可以构成入口，
 * 单入口空闲区域即有且只有一个位于边界的 O 作为入口的由连通的 O 组成的区域。
 * 如果两个元素在水平或垂直方向相邻，则称它们是“连通”的。
 * 
 * 输入描述
 * 第一行输入为两个数字，
 * 1. 第一个数字为行数 m，
 * 2. 第二个数字列数 n，两个数字以空格分隔，
 * 1 ≤ m , n ≤ 200
 * 剩余各行为矩阵各行元素，元素为X 或 O，各元素间以空格分隔。
 * 
 * 输出描述
 * 若有唯一符合要求的最大单入口空闲区域，输出三个数字，
 * 1. 第一个数字为入口行坐标（范围为0~行数-1）
 * 2. 第二个数字为入口列坐标（范围为0~列数-1）
 * 3. 第三个数字为区域大小，三个数字以空格分隔；
 * 
 * 若有多个符合要求的最大单入口空闲区域，输出一个数字，代表区域的大小；
 * 若没有，输出NULL。
 * */

/**
 * 相关标签：
 * 数组 二维数组 递归 深度优先遍历（dfs）
 * */ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function searchEntryAreas(input) {
    // 按行分割文件内容
    const lines = input.trim().split('/n')
    // 解析矩阵的行数(y)和列数(x)
    const [m, n] = lines[0].split(' ').map(Number)
    // 创建一个二维数组来存储矩阵数据
    const matrix = lines.slice(1).map(row => row.split(' '))

    // 初始化方向数组, 表示上、下、左、右四个方向的行和列的增量
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // 判断坐标是否在矩阵内 x 行数， y 列数
    function isValid(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n
    }

    // 深度优先搜索，找到一个连通区域的大小
    function dfs(x, y) {
        if (!isValid(x, y) || matrix[x][y] !== 'O') {
            // 不再矩阵内或者不是空闲区域 返回0
            return 0;
        }

        matrix[x][y] = 'X' // 标记为已访问


        // 判断是否为多个入口， 如果是返回0
        if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
            validEnter += 1
        }

        let size = 1; // 当前区域大小
        // 对四个方向进行深度优先搜索
        for (const [dx, dy] of directions) {
            size += dfs(x + dx, y + dy)
        }
        if (validEnter > 1) {
            return 0
        } else {
            return size
        }
    }

    let maxArea = 0;
    let maxEnterPoint = null // 二维数组
    let validEnter = 0; // 检测入口数量

    // 遍历边界上面的点，查找最大的单入口空闲区域

    // i 遍历行数
    for (let i = 0; i < m; i++) {
        // j 遍历列数
        for (let j = 0; j < n; j++) {
            // 符合边界的条件
            if (matrix[i][j] === 'O' && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) {
                validEnter = 0 // 初始化入口数
                const area = dfs(i, j)
                if (area >= maxArea && area !== 0) {
                    maxArea = area
                    if (maxEnterPoint === null) {
                        maxEnterPoint = []
                    }
                    maxEnterPoint.push([i, j])
                }
            }
        }
    }
    if (maxEnterPoint === null) {
        return 'NULL'
    } else {
        if (maxEnterPoint.length > 1) {
            return maxArea
        } else {
            return `${maxEnterPoint[0][0]} ${maxEnterPoint[0][1]} ${maxArea}`
        }
    }
}

module.exports = searchEntryAreas