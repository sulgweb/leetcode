/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// 利用map存储数据，然后使用辗转相除法。

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let map = new Map()
  for(let n of deck){
      map.set(n,map.has(n)?map.get(n)+1:1)
  }
  let arr = [...map.values()]
  let res = arr[0]
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  return arr.every(i => (res = gcd(res, i)) > 1)
};
// @lc code=end

