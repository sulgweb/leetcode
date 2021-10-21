/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// 暴力解法
// 遍历，利用数组(arr)存储标记字符(c)在字符串(s)中的位置
// 遍历判断，获取较小的绝对值

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const arr = [];
  const sArr = s.split('');
  for(let i = 0;i<sArr.length;i++){
    if(sArr[i] === c){
      arr.push(i);
    }
  }
  let tag = 0;
  const res = []
  for(let i = 0;i<sArr.length;i++){
    const cur = Math.abs(arr[tag]-i)
    if(tag === arr.length-1){
      // 后续都是与最后一个标记所在的位置进行判断，直接推送cur即可；
      res.push(cur)
    }else{
      const next = Math.abs(arr[tag+1]-i)
      if(cur < next){
        res.push(cur)
      }else{
        tag ++;
        res.push(next)
      }
    }
  }
  return res;
};
// @lc code=end

