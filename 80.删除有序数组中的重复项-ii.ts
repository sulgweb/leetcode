/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// 双指针， 不同的是可以重复一次,因此需要从2开始，并且是对比nums[slow-2]
// 时间复杂度：O(n)， 空间复杂度O(1)
// @lc code=start
function removeDuplicates(nums: number[]): number {
  let len = nums.length;
  if (len <= 2) {
    return len;
  }
  let slow = 2;
  let fast = 2;

  while (fast < len) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
// @lc code=end
