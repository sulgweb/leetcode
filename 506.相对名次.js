/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
// 先深拷贝，然后排序
// 通过indexOf判断在newScore中的位置
var findRelativeRanks = function(score) {
  let newScore = JSON.parse(JSON.stringify(score)).sort((a,b)=>b-a)
  let res = []
  let tagObj = {
    0:"Gold Medal",
    1:"Silver Medal", 
    2:"Bronze Medal"
  }
  score.forEach(item=>{
    let tag = newScore.indexOf(item)
    res.push(tagObj[tag]||tag+1+"")
  })
  return res
};
// @lc code=end

