/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-02-26 20:01:26
 * @LastEditTime: 2021-02-26 23:01:57
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<(-2)**31||x>(2**31)-1) return 0
    let res = x>=0?"":"-"
    let arr = (Math.abs(x)+"").split("")
    let tag = false
    for(let i=arr.length;i>=0;i--){
        if(tag){
            res += arr[i]
        }else{
            if(arr[i]>0){
                res += arr[i]
                tag = true
            }
        }
    }
    if(res<(-2)**31||res>(2**31)-1) return 0
    return res
};
// @lc code=end

