/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// 获取最值，然后根据增减情况分别推送即可

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  var ans = [], min = 0, max = s.length;
  for (var i = 0; i < s.length + 1; i++) {
    if (s[i] === 'D') {
      ans.push(max);
      max--;
    } else {
      ans.push(min);
      min++;
    }
  }
  return ans;
};
// @lc code=end

