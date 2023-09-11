/**
 * 冒泡排序
 * 
 * 时间复杂度：O(n2)
 * 稳定性：稳定排序
 * 冒泡排序的思想：
 * 我们要把相邻的元素两两比较，当一个元素大于右侧相邻元素时，交换它们的位置;
 * 当一个元素小于或等于右侧相邻元素时，位置不变。
 * */

/**
 * 方法1：这种排序算法的每一个元素都可以像小气泡一样，
 * 根据自身大小，一点一点地向着数组的一侧移动。
 * */
// function bubbleSort(nums) {
//     // 1. 使用双循环进行排序, 外部循环控制所有的回合
//     for(let i =0; i<nums.length;i++) {
//         // 1. 1内部循环实现每一轮的冒泡处理
//         for(let j = 0;j<nums.length - i - 1;j++) {
//             if(nums[j] > nums[j+1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//             }
//         }
//     }
//     return nums
// }

/**
 * 方法2：优化
 * 如果能判断出数列已经有序，并做出标记，
 * 那么剩下的几轮排序就不必执行了，可以提前结束工作
 * */ 
// function bubbleSort(nums) {
//     for(let i =0; i<nums.length;i++) {
//         // 有序标记，每一轮的初始值都是true
//         let isSorted = true;
//         for(let j = 0;j<nums.length - i - 1;j++) {
//             if(nums[j] > nums[j+1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//                 // 因为有元素进行交换，所以不是有序的，标记为false
//                 isSorted = false
//             }
//         }
//         if(isSorted) {
//             break
//         }
//     }
//     return nums
// }

/**
 * 方法3：再优化
 * 我们可以在每一轮排序后，记录下来最后一次元素交换的位置，
 * 该位置即为无序数列的边界，再往后就是有序区了
 * */ 
// function bubbleSort(nums) {
//     // 记录最后一次交换的位置
//     let lastExchangeIndex = 0;
//     // 无序数列的边界，每次比较只需要比到这里为止
//     let  sortBorder = nums.length - 1;

//     for(let i =0; i<nums.length;i++) {
//         let isSorted = true;
//         for(let j = 0;j<sortBorder;j++) {
//             if(nums[j] > nums[j+1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//                 isSorted = false

//                 // 更新为最后一次交换元素的位置
//                 lastExchangeIndex = j
//             }
//         }
//         // 更新无序数列的边界
//         sortBorder = lastExchangeIndex
//         if(isSorted) {
//             break
//         }
//     }

//     return nums
// }

/**
 * 方法4：鸡尾酒排序
 * 鸡尾酒排序的元素比较和交换过程是双向的。
 * */ 
function bubbleSort(nums) {
    let tmp = 0;
    for(let i =0; i<nums.length/2;i++) {
        // 有序标记，每一轮的初始值都是true
        let isSorted = true;
        // 奇数轮，从左向右比较和交换
        for(let j = i;j<nums.length - i - 1;j++) {
            if(nums[j] > nums[j+1]) {
                tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp
                // 有元素交换，所以不是有序的，标记变为false
                isSorted = false
            }
        }
        if(isSorted) {
            break
        }
        // 在偶数轮之前，将isSorted重新标记为true
        isSorted = true;
        // 偶数轮，从右向左比较和交换
        for(let j = nums.length- i - 1;j>i;j--) {
            if(nums[j] < nums[j-1]) {
                tmp = nums[j]
                nums[j] = nums[j-1]
                nums[j-1] = tmp
                 // 因为有元素交换，所以不是有序的，标记变为false
                 isSorted = false
            }
        }
        if(isSorted) {
            break
        }
    }

    return nums
}

module.exports = bubbleSort