const insertionSort = require('../../../src/algorithms/sorting/insertionSort');

describe('insertionSort - 算法基础 - 插入排序', function () {
  test('测试用例1', () => {
    expect(insertionSort([2,1])).toEqual([1,2]);
  });

  test('测试用例2', () => {
    expect(insertionSort([5,2,4,6,1,3])).toEqual([1,2,3,4,5,6])
  });
});
