/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
// 暴力解法
// function removeDuplicates(nums: number[]): number {
//   const obj = {};
//   let i = 0;
//   while (i < nums.length) {
//     if (obj[nums[i]]) {
//       nums.splice(i, 1);
//     } else {
//       obj[nums[i]] = true;
//       i++;
//     }
//   }
//   return i;
// }

// 快慢指针
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  const len = nums.length;
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
}
// @lc code=end
