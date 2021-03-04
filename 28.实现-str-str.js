/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-04 08:16:33
 * @LastEditTime: 2021-03-04 08:38:50
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// needle为空直接返回0
// needle长度大于haystack直接返回-1
// 双重循环，haystack[i]等于needle的第一个字符再进入第二层循环
var strStr = function(haystack, needle) {
    if(needle.length==0)return 0
    if(needle.length>haystack.length)return -1
    for(let i=0;i<haystack.length;i++){
        if(haystack[i] == needle[0]){
            let tag = true
            for(let j=1;j<needle.length;j++){
                if(haystack[i+j]!==needle[j]){
                    tag = false
                    break;
                }
            }
            if(tag)return i
        }
    }
    return -1
};
// @lc code=end

