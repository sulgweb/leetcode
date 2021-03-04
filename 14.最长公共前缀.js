/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-02-26 23:49:51
 * @LastEditTime: 2021-02-27 00:30:15
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length<0)return ""
    let res = strs[0]
    for(let i=1;i<strs.length;i++){
        for(let j =0;j<res.length&&j<strs[i].length;j++){
            if(res[i] !== strs[i][j]){
                break;
            }
            res = res.substr(0,j)
            if(res === ""){
                return res
            }
            return res
        }
    }
    return res
};
// @lc code=end

