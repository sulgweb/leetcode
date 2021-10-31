/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

// 暴力解法
// 存储每个单词的长度
// 遍历，当currentLen+item 大于 100，换行（line++），否则添加当前行的长度


/* var numberOfLines = function(widths, s) {
  let line = 1, currentLen = 0;
  const obj = {}
  for(let i = 0;i<26;i++){
    obj[String.fromCharCode(i+97)] = widths[i];
  }
  for(let item of s){
    const num = obj[item];
    if((currentLen + num)>100){
      line++;
      currentLen = num
    }else{
      currentLen += num
    }
  }
  return [line, currentLen]
}; */


// 优化
// 不用对象来存储字母对应的长度，每次遍历中直接获取，可降低内存的利用率
var numberOfLines = function(widths, s) {
  let line = 1, currentLen = 0;
  for(let item of s){
    const num = widths[item.charCodeAt() - 97];
    if((currentLen + num)>100){
      line++;
      currentLen = num
    }else{
      currentLen += num
    }
  }
  return [line, currentLen]
};


// @lc code=end

