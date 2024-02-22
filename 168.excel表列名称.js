/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-05 08:24:07
 * @LastEditTime: 2021-03-05 10:00:41
 */
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 先利用ASCII码构建A-Z的数组
// n-1后，n再取余，将符合数组中的下标

var convertToTitle = function(n) {
    let arr = [],res = []
    for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCharCode(i))
    }
    while(n>0){
        n--
        res.unshift(arr[n%26])
        n = Math.floor(n/26)
    }
    return res.join('')
};
// @lc code=end

