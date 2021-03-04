/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 00:13:07
 * @LastEditTime: 2021-03-05 00:20:30
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 只要后一天比前一天大就说明有利润，所以直接加到max作为总利润
var maxProfit = function(prices) {
    let max = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i] < prices[i+1]) {
            max += prices[i+1] - prices[i];
        }
    }
    return max
};
// @lc code=end

