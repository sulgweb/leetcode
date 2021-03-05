/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 08:24:07
 * @LastEditTime: 2021-03-05 08:49:11
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
var convertToTitle = function(n) {
    let arr = [],res = "",index=1
    for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCharCode(i))
    }
    while(n>26){
        
        res = arr[n%26-1]+res
        n = n-(26**index)
        index++
        console.log(n,res)
    }
    return n?arr[n]+res:res
};
console.log(convertToTitle(701))
// @lc code=end

