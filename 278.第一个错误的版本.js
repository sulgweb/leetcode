/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-10 08:14:51
 * @LastEditTime: 2021-03-10 08:49:40
 */
/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// 解法1:遍历总长度n，通过isBadVersion判断是否为错位的版本
// 解法2：二分查找
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        /* for(let i = 0;i<=n;i++){
            if(isBadVersion(i)){
                return i
            }
        } */
        var left = 1,right = n;
        while(left < right) {
            var mid = left + Math.floor((right - left) / 2);
            if(isBadVersion(mid)) {
                right = mid;
            }else {
                left = mid + 1;
            }
        }
        return left;
    };
};
// @lc code=end

