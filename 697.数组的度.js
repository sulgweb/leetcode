/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */
// 暴力解法
// 遍历获取每个数字的出现次数，首次出现位置，末次出现位置。并使用对象存储起来
// 遍历对象，获取数字出现次数最多的项，返回（首次出现位置-末次出现位置）的最小值

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let obj = {}
  nums.forEach((item,index)=>{
    if(obj[item]){
      obj[item].data++
      obj[item].last=index
    }else{
      obj[item] = {
        data:1,
        start:index,
        last:index
      }
    }
  })
  let resObj = {
    data:0,
    value:0
  }
  for(let i in obj){
    let item = obj[i]
    if(item.data>resObj.data){
      resObj.data = item.data,
      resObj.value = item.last-item.start+1
    }else if(item.data == resObj.data){
      resObj.value = Math.min(item.last-item.start+1,resObj.value)
    }
  }
  return resObj.value
};

// @lc code=end

