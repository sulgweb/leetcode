/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-15 08:14:17
 * @LastEditTime: 2021-03-15 08:28:05
 */
/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// 利用toString和parseInt完成进制转换
var findComplement = function(num) {
    let arr = num.toString(2).split("")
    let res = ""
    for(let item of arr){
        if(item=="1"){
            res += "0"
        }else{
            res += "1"
        }
    }
    return parseInt(res,2)
};
// @lc code=end

