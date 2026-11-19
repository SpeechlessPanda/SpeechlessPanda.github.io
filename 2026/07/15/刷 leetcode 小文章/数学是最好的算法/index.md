# 数学是最好的算法

> 今天刷 leetcode 每日一题，题面如下：给你一个整数 n ，请你计算以下两个值的最大公约数（ GCD ）： sumOdd ：最小的 n 个正奇数的总和； sumEven ：最小的 n 个正偶数的总和；返回 sumOdd 和 sumEven 的 GCD 。

- Published: 2026-07-15
- Author: SpeechlessPanda
- Tags: 编程, 知识
- Original page: https://speechlesspanda.github.io/2026/07/15/%E5%88%B7%20leetcode%20%E5%B0%8F%E6%96%87%E7%AB%A0/%E6%95%B0%E5%AD%A6%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E7%AE%97%E6%B3%95/index.html
- License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

今天刷 leetcode 每日一题，题面如下：给你一个整数 n ，请你计算以下两个值的最大公约数（ GCD ）： sumOdd ：最小的 n 个正奇数的总和； sumEven ：最小的 n 个正偶数的总和；返回 sumOdd 和 sumEven 的 GCD 。

给大伙看看用辗转相除法怎么做。

```cpp
class Solution {
public:
    int gcd(int x, int y) {
        return y == 0 ? x : gcd(y, x % y);
    }
    int gcdOfOddEvenSums(int n) {
        return gcd(n * n, n * (n + 1));
    }
};
```

事实上，要是用上 `<numeric>` 库里自带的 gcd 函数，这道题将会更简单。但是今天分享的重点不在这里，让我们关注一下最后一条语句。学过高中数学的都知道，这是由等差数列求和公式算出来的奇数和和偶数和。具体公式如下：

$$
sumOdd=1+3+⋯+(2∗n−1)=n^2
$$
$$
sumEven=2+4+⋯+(2∗n)=n∗(n+1)
$$

那么问题来了，我们并不需要拉马努金那样的注意力也能发现，这两个结果里面，是不是都有个 n 呢。所以有一个时间和空间复杂度都是 O(1) 的解法如下：

```cpp
class Solution {
public:
    int gcdOfOddEvenSums(int n) {
        return n;
    }
};
```

数学是最好的算法。
