/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
// 先转大写，然后通过正则去除“-”
// 然后S.length%K 取余。余数即为开始字符串的长度
var licenseKeyFormatting = function(S, K) {
  S=S.toUpperCase().replace(/\-/g,"")
  let len = S.length%K
  let res = S.substring(0,len)
  S = S.substring(len,S.length)
  while(S.length>0){
    if(res)res+="-"
    res += `${S.substring(0,K)}`
    S = S.substring(K,S.length)
  }
  return res
};
// @lc code=end

