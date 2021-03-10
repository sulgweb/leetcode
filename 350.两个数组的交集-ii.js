/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-11 00:08:52
 * @LastEditTime: 2021-03-11 00:43:28
 */
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 利用对象存储数组中的项出现的次数
// 然后遍历obj1，查看obj2中是否也存在该key，存在则将小的个数推送到res中
var intersect = function(nums1, nums2) {
    let obj1 = {}, obj2 = {}
    let res = []
    for(let item of nums1){
        obj1[item]?obj1[item]++:obj1[item]=1
    }
    for(let item of nums2){
        obj2[item]?obj2[item]++:obj2[item]=1
    }
    for(let i in obj1){
        if(obj2[i]){
            let len = obj1[i]<obj2[i]?obj1[i]:obj2[i]
            while(len>0){
                res.push(i)
                len--
            }
        }
    }
    return res
};
// @lc code=end

