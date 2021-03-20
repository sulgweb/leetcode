/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let obj={},res = []
  for(let i=0;i<list1.length;i++){
    obj[list1[i]]=i
  }
  for(let i=0;i<list2.length;i++){
    let item = list2[i]
    if(obj[item]||obj[item]==0){
      if(res)
    }
  }
  console.log(obj)
  //return res
};
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["KFC","Shogun","Burger King"]))
// @lc code=end

