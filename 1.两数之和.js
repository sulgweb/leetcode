/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-02-26 19:20:43
 * @LastEditTime: 2021-02-26 19:47:14
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i in nums){
        let targetNum = target-nums[i]
        if(map[targetNum]){
            return [map[targetNum],i]
        }else{
            map[nums[i]] = i
        }
    }
};
// @lc code=end

