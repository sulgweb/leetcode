/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-05 08:11:51
 * @LastEditTime: 2021-03-05 08:23:26
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双重循环进行判断，当current==target时，返回所在的第n项（非下标）
// 当current>target，跳出当前循环
var twoSum = function(numbers, target) {
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            let current = numbers[i]+numbers[j]
            if(current == target){
                return [i+1,j+1]
            }else if(current > target){
                break;
            }
        }
    }
};

// @lc code=end

