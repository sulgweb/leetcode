/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 利用object对象的特性，对当前项出现的次数进行存储
// 遍历后发现，存在sObj[i]!==tObj[i],说明出现的次数不相等即不是字母异位词
var isAnagram = function(s, t) {
  if(s.length!==t.length) return false
  let sObj = {},tObj = {}
  for(let i=0;i<s.length;i++){
    if(sObj[s[i]]){
      sObj[s[i]] += 1
    }else{
      sObj[s[i]] = 1
    }

    if(tObj[t[i]]){
      tObj[t[i]] += 1
    }else{
      tObj[t[i]] = 1
    }
  }
  for(let i in sObj){
    if(sObj[i]!==tObj[i]){
      return false
    }
  }
  return true
};
// @lc code=end

