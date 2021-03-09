/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 使用obj对象key值存储当前项，key所对应的值存储当前项的下标
// 当obj[item]==0时，通过if()判断会不进入if内，因此通过隐式转换变成"0",从而可以正常进入
// 当obj[item]不存在时，obj[item]+""，会变成"undefined"，i-"undefined" 为Nan。Nan<=k永远都是false
var containsNearbyDuplicate = function(nums, k) {
  let obj = {}
  for(let i=0;i<nums.length;i++){
    let item = nums[i]
    if(obj[item]&&i-obj[item]<=k){
      return true
    }
    obj[item] = i
  }
  return false
};
// @lc code=end

