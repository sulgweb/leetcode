/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 倒叙遍历，判断当前项是否有进位。
// ans为结果的倒叙，因此需要再倒叙一次得到真正的结果
var addBinary = function(a, b) {
    let ans = ""
    let ca = 0
    for(let i =a.length-1,j=b.length-1;i>=0||j>=0;i--,j--){
      let sum = ca
      sum += i >= 0 ? parseInt(a[i]) : 0;
      sum += j >= 0 ? parseInt(b[j]) : 0;
      ans += sum % 2
      ca = Math.floor(sum/2)
    }
    ans += ca == 1?ca:""
    return ans.split("").reverse().join("")
};
// @lc code=end

