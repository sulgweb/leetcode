/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let slide = []
  for(let item of s){
    while(slide.includes(item)){
      slide.shift()
    }
    slide.push(item)
    maxLen = Math.max(maxLen, slide.length)
  }
  return maxLen
};
// @lc code=end

