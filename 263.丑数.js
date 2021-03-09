/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-10 00:37:44
 * @LastEditTime: 2021-03-10 00:55:48
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 当n小于等于零时，不是丑数
// 当1<=n && n<=5 ,必定是丑数
// 当n>5时，则循环除以2，3，5，当for循环结束时发现标记tag没改为true，说明n没能被2，3，5整除，即不是丑数，return false
var isUgly = function(n) {
    if(n<=0)return false
    let arr = [2,3,5]
    while(n>5){
        let tag = false
        for(let item of arr){
            if(n%item==0){
                n /= item
                tag = true
            }
        }
        if(!tag)return false
    }
    return true
};

// @lc code=end

