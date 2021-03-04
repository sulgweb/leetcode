/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-04 08:02:02
 * @LastEditTime: 2021-03-04 08:15:17
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针，只需要返回慢指针长度的数组即可（超出部分无需理会）。
var removeDuplicates = function(nums) {
    let i = 0
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1

};
// @lc code=end

