/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// 暴力解法
// 获取两个最大值，然后从数组中删除
// 对比两个最大值，相等则同时粉碎，否则则将差值推送到数组中
// 遍历知道数组的长度小于等于1

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if(stones.length===1){
    return stones[0]
  }
  while(stones.length>1){
    const fir = Math.max(...stones);
    const firIndex = stones.indexOf(fir);
    stones.splice(firIndex, 1);
    const sec = Math.max(...stones);
    const secIndex = stones.indexOf(sec);
    stones.splice(secIndex, 1)
    if(fir > sec){
      stones.push(fir - sec)
    }
  }
  
  return stones.length > 0 ? stones[0] : 0
};
// @lc code=end

