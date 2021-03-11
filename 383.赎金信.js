/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 08:17:34
 * @LastEditTime: 2021-03-11 08:25:51
 */
/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 先将两个字符串转为数组
// 遍历某个字符串数组，然后查看另外一个数组中是否存在当前项，存在则删除
// 结束遍历时还未return false。说明可以构成，即return true
var canConstruct = function(ransomNote, magazine) {
    let rList = ransomNote.split(""), mList = magazine.split("")
    for(let item of rList){
        let index = mList.indexOf(item)
        if(index!==-1){
            mList.splice(index,1,0)
        }else{
            return false
        }
    }
    return true
};
// @lc code=end

