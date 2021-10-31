/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// 暴力解法，利用数组的map和reverse方法

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  return image.map(item=>item.reverse().map(i=>i^1))
};
// @lc code=end

