/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// 利用栈

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const sLen = s.length
  const result = []
  let resultStr = ''
  let stack = []
  for (let i = 0; i < sLen; i++) {
    if (stack.length === 0) {
      result.push([])
    }
    result[result.length - 1].push(s[i])
    if (s[i] ==='(') {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  result.forEach(item=>{
    item.pop()
    item.shift()
    resultStr = resultStr+item.join('')
  })

  return  resultStr
};
// @lc code=end

