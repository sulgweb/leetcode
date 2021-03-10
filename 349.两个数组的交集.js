/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 00:01:43
 * @LastEditTime: 2021-03-11 00:06:40
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 遍历num1，判断num2和res中是否存在当前项，不存在则push到res中
var intersection = function(nums1, nums2) {
    let res = []
    for(let item of nums1){
        if(nums2.includes(item)&&!res.includes(item)){
            res.push(item)
        }
    }
    return res
};
// @lc code=end

