/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-14 15:01:56
 * @LastEditTime: 2021-03-14 15:27:09
 */
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 重复的字符串在s中出现了一次以上，在s+s中出现了两次以上
// 当s+s去掉首尾元素后（newS），s必定在newS中出现一次以上
var repeatedSubstringPattern = function(s) {
    let newS = (s+s).slice(1,-1)
    return newS.includes(s)
};
// @lc code=end

