/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
// 暴力解法，先合并数组，然后排序再取中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const list = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(list)
  const len = list.length;
  let result = len % 2 == 0 ? (list[len / 2 - 1] + list[len / 2] ) / 2 : list[Math.floor(len / 2)];
  console.log(result)
  return result;
}

findMedianSortedArrays([1,2],[3,4])
// @lc code=end
