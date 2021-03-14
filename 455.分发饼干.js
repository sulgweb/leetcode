/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gObj = {},sObj=[]
  g.forEach(item=>{
    gObj[item]?gObj[item]+=1:gObj=1
  })
  s.forEach(item=>{
    sObj[item]?sObj[item]+=1:sObj=1
  })
  console.log(gObj,sObj)
};
console.log(findContentChildren([1,2,3,3],[1,2,3,2,1]))
// @lc code=end

