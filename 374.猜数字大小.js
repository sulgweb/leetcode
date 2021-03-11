/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 07:59:20
 * @LastEditTime: 2021-03-11 08:16:40
 */
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 二分查找法
// pick为初始输入值，num为每一轮的mid值
var guessNumber = function(n) {
    let left = 0,right = n
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(guess(mid)==1){
            left = mid + 1
        }else if(guess(mid)==-1){
            right = mid - 1
        }else{
            return mid
        }
    }
};
// @lc code=end

