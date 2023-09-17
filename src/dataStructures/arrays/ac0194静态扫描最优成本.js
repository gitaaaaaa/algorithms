/**
 * 题目0194-静态代码扫描服务
 * https://wiki.amoscloud.com/zh/ProgramingPractice/NowCoder/Adecco/Topic0194
 * 
 * 相关标签： 数组 哈希表 动态规划
 * 
 * 题目描述：
 * 静态扫描快速识别源代码的缺陷，静态扫描的结果以扫描报告作为输出：
 * 1. 文件扫描的成本和文件大小相关，如果文件大小为 n，则扫描成本为 n 个金币
 * 2. 扫描报告的缓存成本和文件大小无关，每缓存一个报告需要 m 个金币
 * 3. 扫描报告缓存后，后续再碰到该文件则不需要扫描成本，直接获取缓存结果
 * 给出源代码文件标识序列和文件大小序列，求解采用合理的缓存策略，最少需要的金币数。
 * 说明: 需要判断是否需要缓存，计算最少需求金币数
 * 
 * 输入描述
 * 第一行为缓存一个报告金币数 m ,1 ≤ m ≤ 100
 * 第二行为文件标识序列：F1,F2,F3...Fn，其中1 ≤ n ≤ 10000，1≤ F ≤ 1000中
 * 第三行为文件大小序列：S1,S2,S3...Sn，其中1 ≤ n ≤ 10000，1≤ F ≤ 10
 * 
 * 输出描述
 * 采用合理的缓存策略，需要的最少金币数
 * 
 * 示例一
 * 输入：
 * 5
 * 1 2 2 1 2 3 4
 * 1 1 1 1 1 1 1
 * 输出：
 * 7
 * 说明
 * 文件大小相同，扫描成本均为1个金币。缓存任意文件均不合算，因而最少成本为7金币
 * 
 * 示例二
 * 输入：
 * 5
 * 2 2 2 2 2 5 2 2 2
 * 3 3 3 3 3 1 3 3 3
 * 输出：
 * 9
 * 说明
 * 2号文件出现了8次，扫描加缓存成本共计3+5=8，不缓存成本为3*8=24，显然缓存更优，最优成本为8+1=9。
 * */
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []
rl.on('line',function(line) {
    lines.push(line)
    if(lines.length === 3) {
        minimumCoins(lines);
        rl.close()
    }
})

// 方法三：动态规划 + 哈希表
function minimumCoins(line) {
    const m = Number(line[0]); // 缓存一个报告金币数
    const files = line[1].trim().split(' ').map(Number); // 文件标识序列
    const sizes = line[2].trim().split(' ').map(Number); // 文件大小序列（扫描成本）
    const len = files.length;
    
    let hashMap = new Map(); // 存储文件的数量
    // len + 1 是因为我们需要考虑处理前 0 个文件的情况，dp[0] 的初始值为 0 
    const dp = new Array(len+1);
    for(let j =0;j<len+1;j++) {
        dp[j] = [0,0]
    }
    for(let i = 1; i <= len;i++) {
        dp[i][0] = dp[i-1][0] + sizes[i-1]
        if(hashMap.has(files[i-1])) {
            const fileNum = hashMap.get(files[i-1])
            if(fileNum === 1) {
                // 再判断数量
                dp[i][1] = dp[i-1][1] + m
                hashMap.set(files[i-1], 2)
            } else {
                dp[i][1] = dp[i-1][1]
            }
        } else {
            hashMap.set(files[i-1], 1)
            dp[i][1] = dp[i-1][1] + sizes[i-1]
        }
    }
    return Math.min(dp[len][0],dp[len][1])
}


// 方法二：哈希表
// function minimumCoins(line) {
//      // 初始化数据
//     const m = Number(line[0]); // 缓存一个报告金币数
//     const files = line[1].split(' ').map(Number); // 文件标识序列
//     const sizes = line[2].split(' ').map(Number); // 文件大小序列（扫描成本）
    
//     let cost = 0;
//     let cache = new Set();
//     let fileCount = {};
//     for (let i = 0; i < files.length; i++) {
//         if (fileCount[files[i]] === undefined) {
//             fileCount[files[i]] = 0;
//         }
//         fileCount[files[i]]++;
//     }
//     for (let i = 0; i < files.length; i++) {
//         if (!cache.has(files[i])) {
//             cost += sizes[i];
//             if (sizes[i] * fileCount[files[i]] > m) {
//                 cache.add(files[i]);
//                 cost += m;
//             }
//         }
//     }
//     return cost;
// }

// 方法一：哈希表
// function minimumCoins(line) {
//     const m = Number(line[0]); // 缓存一个报告金币数
//     const files = line[1].split(' ').map(Number); // 文件标识序列
//     const sizes = line[2].split(' ').map(Number); // 文件大小序列（扫描成本）
//     const len = files.length;

//     let totalCoins = 0; // 最小文件总成本
//     let totalCoinsCatch = 0;// 最小文件总缓存成本

//     const hashMap = new Map(); // 存储缓存的报告
//     for(let i = 0;i<len; i++) {
//         if(hashMap.get(files[i])) {
//             continue;
//         }

//         // 获取文件个数确定是否缓存
//         const fileNum = files.filter(item=>item === files[i]).length
//         if(fileNum > 1) {
//             if(sizes[i] + m < fileNum*sizes[i]) {
//                 totalCoinsCatch += m
//                 hashMap.set(files[i], true)
//             }
//         }
//         totalCoins += sizes[i]
//     }
//     return totalCoinsCatch + totalCoins
// }

module.exports = minimumCoins



