/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */
// 深拷贝保存一份旧的数据
// 排序，然后拿最大值和第二大的值进行比较
// 如果最大值大于等于第二大值得两倍，寻找最大值的下标，否者返回-1


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  const oldNums = JSON.parse(JSON.stringify(nums))
  const sortNums = nums.sort((a, b) => a - b)
  const len = sortNums.length
  if (sortNums[len - 1] >= sortNums[len - 2] * 2) {
    return oldNums.findIndex(data => data === sortNums[len - 1])
  } else {
    return -1
  }
};

dominantIndex([3, 6, 1, 0])
// @lc code=end

