/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 使用zeroNum编辑0出现的次数
// 循环的条件为nums<length-zeroNum,因为0被添加到了数组的末尾,后面再出现的0都是已经被操作过的了，可以结束循环
// 循环时发现当前项等于0，就删除当前项，i减一，zeroNum加1，然后推送0到数组的末尾
var moveZeroes = function(nums) {
  let zeroNum = 0
  for(let i=0;i<nums.length-zeroNum;i++){
    if(nums[i]==0){
      nums.splice(i,1)
      nums.push(0)
      zeroNum++
      i--
    }
  }
  return nums
};
// @lc code=end

