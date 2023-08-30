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


// 示例一
// 输入
// 4 4
// X X X X
// X O O X
// X O O X
// X O X X
// 输出
// 3 1 5
// 说明
// 存在最大单入口区域，入口行坐标3，列坐标1，区域大小5

// 示例二
// 输入
// 4 5
// X X X X X
// O O O O X
// X O O O X
// X O X X O
// 输出
// 3 4 1
// 说明
// 存在最大单入口区域，入口行坐标3，列坐标4，区域大小1

// 示例三
// 输入
// 5 4
// X X X X
// X O O O
// X O O O
// X O O X
// X X X X
// 输出
// NULL
// 说明
// 示例四
// 输入
// 5 4
// X X X X
// X O O O
// X X X X
// X O O O
// X X X X
// 输出
// 3
// 说明
// 存在两个大小为3的最大单入口区域，两个入口横纵坐标分别为1,3和3,3

const searchEntryAreas = require('../../../src/dataStructures/graphs/ac0180查找单入口空闲区域');

describe('查找单入口空闲区域', function () {
  test('示例一', () => {
    const input = '4 4/nX X X X/nX O O X/nX O O X/nX O X X';
    const expectedOutput = '3 1 5';
    expect(searchEntryAreas(input)).toBe(expectedOutput);
  });

  test('示例二', () => {
    const input = '4 5/nX X X X X/nO O O O X/nX O O O X/nX O X X O';
    const expectedOutput = '3 4 1';
    expect(searchEntryAreas(input)).toBe(expectedOutput);
  });

  test('示例三', () => {
    const input = '5 4/nX X X X/nX O O O/nX O O O/nX O O X/nX X X X';
    const expectedOutput = 'NULL';
    expect(searchEntryAreas(input)).toBe(expectedOutput);
  });

  test('示例四', () => {
    const input = '5 4/nX X X X/nX O O O/nX X X X/nX O O O/nX X X X';
    const expectedOutput = 3;
    expect(searchEntryAreas(input)).toBe(expectedOutput);
  });
});