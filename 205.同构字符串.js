/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 22:50:45
 * @LastEditTime: 2021-03-09 08:47:28
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let obj = {}
    for(let i = 0;i<t.length;i++){
        if(!obj[t[i]]){
            obj[t[i]] = s[i]
        }else if(obj[t[i]] !== s[i]){
            return false
        }
        console.log(obj)
    }
    return true
};
console.log(isIsomorphic("foo","bar"))
console.log(isIsomorphic("badc","baba"))
console.log(isIsomorphic("paper","title"))
// @lc code=end

