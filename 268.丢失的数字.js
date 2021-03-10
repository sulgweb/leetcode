/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-10 08:08:33
 * @LastEditTime: 2021-03-10 08:14:19
 */
/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先遍历数组，利用object对象进行存储
// 然后通过数组的长度进行遍历，找出丢失得数字
var missingNumber = function(nums) {
    let map = {}
    for(let item of nums){
        map[item] = true
    }
    for(let i=0;i<=nums.length;i++){
        if(!map[i]){
            return i
        }
    }
};
// @lc code=end

