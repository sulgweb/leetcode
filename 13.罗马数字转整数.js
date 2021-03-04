/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-02-26 23:09:32
 * @LastEditTime: 2021-02-26 23:49:10
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let map = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
        "IV":4,
        "IX":9,
        "XL":40,
        "XC":90,
        "CD":400,
        "CM":900
    }
    let arr = s.split("")
    let len = arr.length;
    let i = 0
    let res = 0
    while(i<len){
        let ss = arr[i]+arr[i+1]
        if(map[ss]){
            res += map[ss]
            i += 2
        }else{
            res += map[arr[i]]
            i ++
        }
    }
    return Number(res)
};
// @lc code=end

