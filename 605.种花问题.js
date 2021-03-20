/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-20 16:48:08
 * @LastEditTime: 2021-03-20 17:13:45
 */
/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// 遍历
// 当前项的前一项和后一项不为1，既可以种花。sum加一，此时i需要加2，因为不能相邻种花
// 当以上条件不成立，i则加1，到达下一轮的循环中
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length,i=0,sum=0
    //if(i==-1&&n!==0)return false
    while(i<len){
        if(flowerbed[i]==0&&flowerbed[i+1]!==1&&flowerbed[i-1]!==1){
            sum++
            i+=2
        }else{
            i++
        }
    }
    return sum>=n
};
//console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))
// @lc code=end

