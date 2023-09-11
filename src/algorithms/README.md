[toc]

# 算法基础

```txt
💡 算法学习的核心内容
```

## 排序算法（Sorting Algorithms）

快速排序

## 搜索算法（Searching Algorithms）

## 递归与分治法（Recursion and Divide and Conquer）

## 贪心算法（Greedy Algorithms）

- 局部最优解

## 动态规划（Dynamic Programming，简称 DP）

- 最优化
  - 重叠子问题
  - 最优子结构

### 经典应用场景

#### 斐波那契数列

- 方法一： 递归
时间复杂度： O(2^n)
缺点：太耗内存，n太大时耗时长，还可能造成栈溢出。

```
function fibonacci(n) {
  if(n < 1) return 0
  if(n <= 2) return 1
  return fibonacci(n-1) + fibonacci(n-2)
}
```

- 方法二：动态规划

```
function fibonacciArr(n) {
  if (n < 1) {
    return n;
  }
  let fib = new Array(n);
  fib[0] = 0
  fib[1] = 1
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
```

- 方法三: 数学公式
function fibo(num) {
  if (num < 2) {
    return num;
  }
  if (num === 2) {
    return 1;
  }
  return (
    (1 / Math.sqrt(num)) * ((1 + Math.sqrt(num)) / 2) ** num - ((1 - Math.sqrt(num)) / 2) ** num
  ).toFixed();
}

#### 背包问题

## 回溯算法（Backtracking）

## 字符串匹配算法（String Matching Algorithms）

# 算法高阶

```txt
💡 算法常用的技巧
```

## 滑动窗口

- 通常用于解决与连续子序列相关的问题

## 前缀和

## 双指针
