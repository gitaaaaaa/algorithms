/**
 * 题目 静态扫描最优成本
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
 * */

/**
 * 相关标签
 * 数组 动态规划
 * */

function minCost(m, fIds, fSizes) {
     // 初始化数据
    let files = fIds.trim().split(' ').map(Number);
    let sizes = fSizes.trim().split(' ').map(Number);
    

    let cost = 0;
    let cache = new Set();
    let fileCount = {};
    for (let i = 0; i < files.length; i++) {
        if (fileCount[files[i]] === undefined) {
            fileCount[files[i]] = 0;
        }
        fileCount[files[i]]++;
    }
    for (let i = 0; i < files.length; i++) {
        if (!cache.has(files[i])) {
            cost += sizes[i];
            if (sizes[i] * fileCount[files[i]] > m) {
                cache.add(files[i]);
                cost += m;
            }
        }
    }
    return cost;

    // console.log('m----', m)
    // console.log('files----', files)
    // console.log('sizes----', sizes)

    // let n = files.length;
   
    
    // // 表示处理前 i 个文件所需的最少金币数
    // // n + 1 是因为我们需要考虑处理前 0 个文件的情况, dp[0] 的初始值为 0 
    // let dp = new Array(n + 1).fill(0); 
    // let map = new Map() // 存储files key 及 key 对应的 累计cost value
    // for(let i = 1; i<=n;i++) {
    //     dp[i] = dp [i - 1] + sizes [i - 1] // 前i个文件所需要最少得金币
    //     console.log('for - dp', dp)
    //     if(map.has(files[i-1])) {
    //         let j = map.get(files[i - 1]) // 上一个子级的最优解
    //         dp[i] = Math.min(dp[i], dp[j] + m)
    //     } else {
    //         map.set(files[i-1], i)
    //     }
    //     console.log('for - map', map)
    // }
    // console.log('map---',map)
    // console.log('dp---',dp)
    // return dp[n]
}

module.exports = minCost



// 示例一
// 输入
// 5 -> 缓存成本
// 1 2 2 1 2 3 4 - > 原文件标识序列
// 1 1 1 1 1 1 1 -> 文件大小
// 输出
// 7
// 说明
// 文件大小相同，扫描成本均为1个金币。缓存任意文件均不合算，因而最少成本为7金币

// 示例二
// 入参输入
// 5
// 2 2 2 2 2 5 2 2 2
// 3 3 3 3 3 1 3 3 3
// 出参输出
// 9
// 说明
// 2号文件出现了8次，扫描加缓存成本共计3+5=8，不缓存成本为3*8=24，显然缓存更优，最优成本为8+1=9。

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let m = 0; // 缓存一个报告金币数
// let fileIds = []; // 文件标识序列
// let fileSizes = []; // 文件大小序列
// let catchMap = {}; // 存储缓存的扫描报告

// rl.on('line', function (line) {
//     const input = line.trim().split(' ').map(Number);
//     if (m === 0) {
//         m = input[0];
//     } else if (fileIds.length === 0) {
//         fileIds = input;
//     } else if (fileSizes.length === 0) {
//         fileSizes = input;
//         console.log(minimumCoins(m, fileIds, fileSizes));
//         rl.close();
//     }
// })

// function minimumCoins(m, fileIds, fileSizes) {
//     let totalCost = 0; // 存储已经缓存的扫描报告的缓存成本
//     let scanCost = 0; // 存储扫描文件的扫描成本

//     for (let i = 0; i < fileIds.length; i++) {
//         const fileId = fileIds[i];
//         const fileSize = fileSizes[i];
//         // 如果缓存中已经有该文件的扫描报告，则直接从缓存中取出
//         if (catchMap[fileId]) {
//             // 跳过该次循环
//             continue;
//         }
//         // 文件未缓存，比较缓存与不缓存的成本
//         const count = fileIds.filter(id => id === fileId).length;
//         if (count > 1) {
//             // 比较缓存与不缓存的成本
//             const catchCost = fileSize + m;
//             const notCatchCost = fileSize * count;
//             if (catchCost < notCatchCost) {
//                 // 缓存
//                 totalCost += m;
//                 catchMap[fileId] = true;
//             }
//         }
//         // 进行扫描
//         scanCost += fileSize;
//     }

//     // 最少金币数为扫描成本加上缓存成本
//     return totalCost + scanCost;
// }


