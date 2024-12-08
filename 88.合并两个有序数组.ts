/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// 从后向前遍历数组，并插入到原数组中。
// 注意，如果当nums2有剩余项，则需要拷贝到原数组中。而如果是num1有剩余数据则不需要处理（nums1是原数组）
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  if (len2 >= 0) {
    nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1));
  }
}
// @lc code=end
