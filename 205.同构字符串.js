/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-05 22:50:45
 * @LastEditTime: 2021-03-09 11:39:23
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
        if(!obj[s[i]]){
            let tag = true
            for(let index in obj){
                if(obj[index]==t[i]){
                    tag = false
                }
            }
            if(tag){
                obj[s[i]] = t[i]
            }else{
                return false
            }
        }else if(obj[s[i]] !== t[i]){
            return false
        }
    }
    return true
};
/* console.log(isIsomorphic("foo","bar"))
console.log(isIsomorphic("badc","baba"))
console.log(isIsomorphic("paper","title")) */
// @lc code=end

