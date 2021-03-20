/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-20 15:54:53
 * @LastEditTime: 2021-03-20 16:34:13
 */
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
  let res = [], map = new Map(), min = Infinity;
  for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
      let sum = j + map.get(list2[j]); // 求索引和
      if (sum < min) { // 如果索引和小于最小值，重新存储
          res = [list2[j]]; 
          min = sum;
      } else if (sum === min) { // 如果索引和与最小值相等，继续添加
          res.push(list2[j]);
      } else { // 如果索引和大于最小值，继续
          continue;
      }
  }
  return res;
};
// @lc code=end

