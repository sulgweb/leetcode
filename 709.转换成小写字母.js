/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// 字符串转数组
// 利用asscii码进行转换
// 数组转字符串

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split("")
            .map(item=>{
              let asciiCode = item.charCodeAt()
              return asciiCode>=65&&asciiCode<=90?String.fromCharCode(asciiCode+32):item
            })
            .join("")
};
// @lc code=end

