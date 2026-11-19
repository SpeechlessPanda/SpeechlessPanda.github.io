# cpp 数组有趣之一

> 今天刷 leetcode 遇到一个很神奇的问题：给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的子数组的个数 ，子数组是数组中元素的连续非空序列。

- Published: 2026-07-13
- Author: SpeechlessPanda
- Tags: 编程, 知识
- Original page: https://speechlesspanda.github.io/2026/07/13/%E5%88%B7%20leetcode%20%E5%B0%8F%E6%96%87%E7%AB%A0/cpp%20%E6%95%B0%E7%BB%84%E6%9C%89%E8%B6%A3%E4%B9%8B%E4%B8%80/index.html
- License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

今天刷 leetcode 遇到一个很神奇的问题：给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的子数组的个数 ，子数组是数组中元素的连续非空序列。

单看问题本身并不神奇，但是它的题解非常有趣。我把两个题解放在下面，读者不妨猜猜看，哪个题解是官方的能通过的题解。

```cpp
class Solution {//题解1
public:
    int subarraySum(vector<int>& nums, int k) {
        const int n = nums.size();   
        int count = 0;               

        for (int start = 0; start < n; ++start) {
            int sum = 0;
            for (int end = start; end >= 0; --end) {
                sum += nums[end];         
                if (sum == k) {
                    ++count;              
                }
            }
        }
        return count;
    }
};

class Solution {//题解2
public:
    int subarraySum(vector<int>& nums, int k) {
        const int n = nums.size();
        int count = 0;
        int arr[n];
        for (int i = 0; i < n; i++) {
            arr[i] = nums[i];
        }
        for (int start = 0; start < nums.size(); ++start) {
            int sum = 0;
            for (int end = start; end >= 0; --end) {
                sum += arr[end];
                if (sum == k) {
                    count++;
                }
            }
        }
        return count;
    }
};
```

既然我都说了题解有趣，那想来大家不难猜到，看上去非常冗余繁琐的题解 2 才是最终的正确答案。而题解 1 则会在某个测试用例上超时。题解 2 不仅用了多余的空间，还有额外用来赋值的 O(n) 时间复杂度，但是它依然比题解 1 快。敏锐的读者已经发现了，题解 1 后续操作的是一个不标准变长数组 `int arr[n]` ，而题解 2 则是 `vector<int>& nums` 。问题就出在这里，前者是栈上的数组，后者是堆上的一个容器。 vector 的访问是通过内部指针的间接访问，而 `int arr[n]` 则能做到直接寻址。再加上 cpp 的编译器对原生数组的优化更激进，最终造成了这个结果。真有趣， cpp 不愧是注重性能的语言。

话说回来，我本人还是更推崇第一种写法。在代码的编写中，应减少冗余变量的出现，以及冗余的操作，这既为了可读性，也为了强迫症（或者代码品味）。再加上本来这两者带来的时间上的差距其实并不大，只有有特殊需求或在特定场景的情况下（比如数据爆炸多）才有必要追求题解 2 的写法。但是 leetcode 里超时的测试用例，数组里只有 4 个元素，这点差别就是超时和通过的天堑了，我认为这并不妥。

这道题并不难，可能今天写在这里的内容对于大佬来说也不算什么新颖的东西。就当我新手就是爱记录好了（~~还有水博客~~）。最后给大家展示另一种时间复杂度仅为 O(n) 的更优雅的题解（思路详情详见[官方题解](https://leetcode.cn/problems/subarray-sum-equals-k/solutions/238572/he-wei-kde-zi-shu-zu-by-leetcode-solution/?envType=study-plan-v2&envId=top-100-liked)）。

```cpp
class Solution
{
public:
    int subarraySum(vector<int> &nums, int k)
    {
        unordered_map<int, int> mp;
        mp[0] = 1;
        int count = 0; 
        int pre = 0;   
        
        for (auto &x : nums)
        {
            pre += x;

            if (mp.find(pre - k) != mp.end())
            {
                count += mp[pre - k];
            }

            mp[pre]++;
        }

        return count;
    }
};
```
