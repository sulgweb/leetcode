/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-02-26 23:02:21
 * @LastEditTime: 2021-02-26 23:08:57
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false
    let arr = x.toString().split("")
    let len = Math.floor(arr.length)
    let tag = true
    for(let i = 0;i<len;i++){
        if(arr[i]!==arr[arr.length-i-1]){
            tag = false
        }
    }
    return tag
};
// @lc code=end

