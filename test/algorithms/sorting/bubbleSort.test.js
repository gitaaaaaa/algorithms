/**
 * 冒泡排序
 * 
 * 时间复杂度：O(n2)
 * 稳定性：稳定排序
 * 冒泡排序的思想：
 * 我们要把相邻的元素两两比较，当一个元素大于右侧相邻元素时，交换它们的位置;
 * 当一个元素小于或等于右侧相邻元素时，位置不变。
 * */
const bubbleSort = require('../../../src/algorithms/sorting/bubbleSort');

describe('冒泡排序', function () {
//   test('方法1和方法2的示例', () => {
//     const input = [5,8,6,3,9,2,1,7]
//     const output = [1,2,3,5,6,7,8,9]
//     expect(bubbleSort(input)).toEqual(output);
//   });

//   test('方法3的示例', () => {
//     const input = [3,4,2,1,5,6,7,8]
//     const output = [1,2,3,4,5,6,7,8]
//     expect(bubbleSort(input)).toEqual(output);
//   });

  test('方法4的鸡尾酒排序', () => {
    const input = [2,3,4,5,6,7,1,8]
    const output = [1,2,3,4,5,6,7,8]
    expect(bubbleSort(input)).toEqual(output);
  });

  
});