/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-04 07:44:33
 * @LastEditTime: 2021-03-04 08:16:23
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 使用栈的先进后出的思路，一一对应即可
var isValid = function(s) {
    if(s.length<=1)return false
    let queue = []
    let arr = s.split("")
    let tag = true
    for(let item of arr){
        switch (item){
            case "(":queue.push(item);break;
            case "[":queue.push(item);break;
            case "{":queue.push(item);break;
            case ")":
                if(queue.pop()!=="("){
                    tag = false
                    console.log(1)
                };
                break;
            case "]":
                if(queue.pop()!=="["){
                    tag = false
                    console.log(2)
                };
                break;
            case "}":
                if(queue.pop()!=="{"){
                    tag = false
                    console.log(3)
                };
                break;
        }
    }
    return queue.length?false:tag
};
// @lc code=end

