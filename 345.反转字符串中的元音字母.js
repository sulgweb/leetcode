/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let list = []
  let obj = {
    a:true,
    e:true,
    i:true,
    o:true,
    u:true
  }
  for(let i=0;i<s.length;i++){
    if(obj[s[i]]){
      list.push({
        index:i,
        value:s[i]
      })
    }
  }
  let len = Math.floor(list.length/2)
  for(let i=0;i<len;i++){
    let index = list[list.length-i-1].index
    let value = list[list.length-i-1].value
    let newData = s[list[i].index]
    console.log(value,newData,list[i].index,index)
    s[list[i].index] = value
    s[index] = newData
    console.log(s[list[i].index],s[index])
  }
  return s
};
console.log(reverseVowels("hello"))
// @lc code=end

