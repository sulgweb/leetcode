/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// 直接暴力解法，没搞懂为啥需要while+双指针，后续研究

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
// @lc code=end
