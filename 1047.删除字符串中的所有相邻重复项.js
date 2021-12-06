/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// 利用栈进行存储
// 遍历，每次都与栈末进行对比，相同就出栈，不同就入栈
// 最后返回栈中的数据即可

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const arr = s.split('');
  const stack = [];
  for(let item of arr){
    if(stack[stack.length -1] === item){
      stack.pop()
    }else{
      stack.push(item)
    }
  }
  return stack.join('')
};
// @lc code=end

