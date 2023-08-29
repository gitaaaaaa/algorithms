/**
 * 插入排序法
 * 输入 5,2,4,6,1,3
 * 输入 5, 2,1,6,4,3 -> 2, 5, 1, 6, 4, 3
 * 输出 1,2,3,4,5,6
 * */
function insertionSort(arr) {
    // 第一个值已排好序, 从第二个值开始比较
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let left = i - 1;

        // 和左侧所有数值去比较并移动左侧数值
        while (left >= 0 && arr[left] > key) {
            arr[left + 1] = arr[left]; // 左侧数值向后赋值一位
            left--;
        }
        arr[left + 1] = key; // 插入当前位置
    }
    return arr;
}

module.exports = insertionSort;
