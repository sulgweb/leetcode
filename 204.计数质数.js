/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 22:39:40
 * @LastEditTime: 2021-03-05 22:49:45
 */
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 埃氏筛
// 如果 y 是 x 的因数，那么 x/y也必然是x的因数
// 如果 x 是质数，那么大于 x 的 x 的倍数 2x,3x… 一定不是质数
var countPrimes = function(n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};
// @lc code=end

