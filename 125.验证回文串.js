/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 00:22:45
 * @LastEditTime: 2021-03-05 00:45:26
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 先进行大小写转换，然后正则表达式移除不进行对不的字符
// 接下来就是遍历+首尾双向对比
var isPalindrome = function(s) {
    if(s=="")return true
    s = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    const len = s.length
    const halfLen = Math.floor(len/2)
    for(let i =0;i<halfLen;i++){
        if(s[i]!==s[len-1-i]){
            return false
        }
    }
    return true
};
// @lc code=end

