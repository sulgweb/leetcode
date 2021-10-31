/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// 暴力解法
// 利用toString将10进制转2进制
// 遍历获取间距
// 利用Math.max方法获取最大值

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  const arr = (n).toString(2);
  const len = arr.length;
  const newArr = []
  
  for(let i=0;i<len;i++){
    if(arr[i]==1){
      newArr.push(i)
    }  
  }
  if(newArr.length<=1){
    return 0
  }

  const numList = newArr.map((item, index) => {
    if(index !== newArr.length -1){
      const num = newArr[index+1] - item
      if( num >= 1){
        return num
      }
    }
  }).filter(item => item !== undefined)
  return Math.max(...numList)
};

// @lc code=end

