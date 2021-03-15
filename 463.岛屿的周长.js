/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-15 07:44:19
 * @LastEditTime: 2021-03-15 08:13:48
 */
/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 暴力循环
// 当grid[i][j]为1的时候直接加4
// 当grid[i-1][j]==1或者grid[i][j-1]===0，说明有重合的边，而重合的边不会在周长中计算，需要减去2
var islandPerimeter = function(grid) {
    if(grid.length==0)return 0
    let sum = 0
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                sum+=4
                if(i-1>=0&&grid[i-1][j]==1){
                    sum -= 2
                }
                if(j-1>=0&&grid[i][j-1]==1){
                    sum -= 2
                }
            }
        }
    }
    return sum
};
// @lc code=end

