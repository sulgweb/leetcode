/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 暴力解法
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// 利用hashmap
function twoSum(nums: number[], target: number): number[] {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const tagNum = target - nums[i];
    if (map[tagNum] || map[tagNum] === 0) {
      return [map[tagNum], i];
    } else {
      map[nums[i]] = i;
    }
  }
}
// @lc code=end
