/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */
// 暴力解法
// 获取两个数组的总数的差值,然后遍历，获取满足差值一半的值

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  const sum1 = aliceSizes.reduce((a,b)=>a+b)
  const sum2 = bobSizes.reduce((a,b)=>a+b)
  const diff = sum1 - sum2;
  
  for(let i =0;i<aliceSizes.length;i++){
    for(let j=0;j<bobSizes.length;j++){
      if(aliceSizes[i] - bobSizes[j] === diff/2){
        return [aliceSizes[i],bobSizes[j]]
      }
    }
  }
};
// @lc code=end

