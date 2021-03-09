/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-05 22:50:45
 * @LastEditTime: 2021-03-09 14:33:28
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

 // 第一次遍历构建obj对象
 // 1.不存在obj对应的key值，则进行obj对象的遍历，如果obj中某个key对应的值与t[i]相等则为false，不等就添加到obj对象中
 // 2.存在obj对应的key值，判断obj[s[i]] 与 t[i]是否相等
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

