/**
 * 题目描述 预定酒店
放暑假了，小明决定到某旅游景点游玩，他在网上搜索到了各种价位的酒店（长度为n的数组A），他的心理价位是x元，请帮他筛选出k个最接近x元的酒店（n>=k>0）,并由低到高打印酒店的价格。

输入描述
第一行：n, k, x
第二行：A[0] A[1] A[2]...A[n-1]

输出描述
从低到高打印筛选出的酒店价格

 * 
 * */

function partition(arr, left, right, pivotIndex) {
    let pivotValue = arr[pivotIndex][0];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i][0] < pivotValue) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
}

function quickSelect(arr, left, right, k) {
    if (left === right) return;
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    pivotIndex = partition(arr, left, right, pivotIndex);
    if (k === pivotIndex) {
        return;
    } else if (k < pivotIndex) {
        quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function processHotalPrices(input) {
    // n 数组的长度
    // k 筛选出的酒店个数（退出查找循环并返回）
    // x 心理价位

    const lines = input.split('/n')
    const [n, k, x] = lines[0].trim().split(' ').map(Number);
    const hotalPrices = lines[1].trim().split(' ').map(Number).sort((a,b)=>a-b)
    // 创建一个数组来存储酒店价格与心理价位的差值
    let diff = [];
    for(let i = 0 ; i< n;i++) {
        diff.push([Math.abs(hotalPrices[i] - x),hotalPrices[i]])
    }

    // 使用快速选择算法找到第 k 个最接近心理价位的酒店
    quickSelect(diff, 0, n - 1, k - 1);

    let result = diff.slice(0, k);
    result.sort((a, b) => a[1] - b[1]);

    // 打印筛选出的酒店价格
    for (let i = 0; i < k; i++) {
        console.log(result[i][1]);
    }

    // 第二种解法




    // 第一种解法 时间复杂度为 O(nlogn)
    // const lines = input.split('/n')
    // const [n, k, x] = lines[0].trim().split(' ').map(Number);
    // const hotalPrices = lines[1].trim().split(' ').map(Number).sort((a,b)=>a-b)
    // let diff = []
    // for(let i = 0 ; i< n;i++) {
    //     diff.push([Math.abs(hotalPrices[i] - x),hotalPrices[i]]) // 存储酒店价格差
    // }
    // diff.sort((a,b)=>a[0]-b[0]) // 根据价格差排序
    // let result = []
    // for (let i = 0; i < k; i++) {
    //     result.push(diff[i][1]); // 获取最小差值
    // }
    // return result.sort((a,b)=>a-b).join(' ')
}

module.exports = processHotalPrices