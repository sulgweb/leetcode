/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 00:47:27
 * @LastEditTime: 2021-03-05 00:55:39
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 不能采用额外的空间，算法时间复杂度为线性，就应该往异或的方向处理
var singleNumber = function(nums) {
    return nums.reduce((cur,last)=>cur^last)
};
// @lc code=end

