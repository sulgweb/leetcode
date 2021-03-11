/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 08:26:00
 * @LastEditTime: 2021-03-11 08:36:32
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 利用map存储s中每一项出翔的次数
var firstUniqChar = function(s) {
    if(s.length<1)return -1
    let map = {}
    for(let i=0;i<s.length;i++){
        let key = s[i]
        if(map[key]){
            map[key].value++
        }else{
            map[key]={
                index:i,
                value:1
            }
        }
    }
    for(let i in map){
        if(map[i].value===1)return map[i].index
    }
    return -1
};
// @lc code=end

