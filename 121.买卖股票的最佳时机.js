/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-04 23:19:50
 * @LastEditTime: 2021-03-05 00:10:13
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 遍历过程中保存最小值(miniPrice)和最大插值(max)，又因为是先买后买，所以直接往后推进即可
var maxProfit = function(prices) {
    let max = 0,minPrice = prices[0]
    for(let i = 1;i<prices.length;i++){
        minPrice = Math.min(prices[i],minPrice)
        max = Math.max(max,prices[i] - minPrice)
    }
    return max
};
// @lc code=end

