/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 07:51:17
 * @LastEditTime: 2021-03-11 07:57:43
 */
/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 当num小于1，必然不是完全平方数
// 进入循环，但tem*tem<num，说明tem不是num的完全平方根，tem加1，继续循环
// 当tem === num 说明存在完全平方根，即为true，否则为false
var isPerfectSquare = function(num) {
    if(num<1)return false
    let tem = 1
    while(tem*tem<num){
        tem+=1
    }
    return tem*tem===num
};
// @lc code=end

