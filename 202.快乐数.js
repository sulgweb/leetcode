/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 22:23:50
 * @LastEditTime: 2021-03-05 22:33:31
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 如果sum可以变为1则为快乐数。
// 而当sum会从夫的时候就是非快乐数
// 利用set.has()判断重复，true则直接return flase
var isHappy = function(n) {
    let set = new Set(), sum
    n += ''
    while (sum !== 1) {
        sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]*n[i]
        }
        n = sum + ''
        if (set.has(sum)) return false
        set.add(sum)
    }
    return true
};
// @lc code=end

