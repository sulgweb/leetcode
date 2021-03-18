/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 暴力解法
// 通过obj存储A和L出现的次数
// 当A连续次数大于1或者L的连续次数大于2，就抛出false
var checkRecord = function(s) {
  if(s.length<=1)return true
  let obj = {
    A:0,
    L:0,
  }
  for(let i=0;i<s.length;i++){
    if(s[i]=="A"){
      obj.L = 0
      obj.A+=1
      if(obj.A>1){
        return false
      }
    }else if(s[i]=="L"){
      obj.L+=1
      if(obj.L>2){
        return false
      }
    }else{
      obj.L = 0
    }
  }
  return true
};
//console.log(checkRecord("PPALLL"))
// @lc code=end

