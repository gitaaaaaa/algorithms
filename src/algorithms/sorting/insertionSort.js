/**
 * 插入排序法
 * 输入 5,2,4,6,1,3
 * 输出 1,2,3,4,5,6
 * */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

module.exports = insertionSort;
