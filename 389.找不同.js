/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 08:36:55
 * @LastEditTime: 2021-03-11 08:54:15
 */
/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length==0)return t
    let sObj = {}, tObj = {}
    for(let i = 0;i<t.length;i++){
        if(sObj[s[i]]){
            sObj[s[i]] ++
        }else{
            sObj[s[i]] = 1
        }
        if(tObj[t[i]]){
            tObj[t[i]] ++
        }else{
            tObj[t[i]] = 1
        }
    }
    console.log(sObj,tObj)
    delete sObj[undefined]
    for(let i in sObj){
        if(sObj[i]!==tObj[i]){
            return i
        }
    }
    return t[t.length-1]
};
// @lc code=end

