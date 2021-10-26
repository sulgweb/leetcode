/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */



// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  // 暴力解法
  // 利用split切割邮箱，得到数组的第二个值为域名
  // 利用split和正则表达式去除相关的字符
  // 利用obj对象的特性进行存储，最后遍历obj对象即可
  /* const obj = {}
  emails.forEach(item => {
    const data = item.split('@');
    const param = data[0].split("+")[0].replace(/\./g, '');
    const host = data[1]
    if(obj[host]){
      obj[host][param] = true
    }else{
      obj[host] = {}
      obj[host][param] = true
    }
  })
  let sum = 0
  for(let i in obj){
    for(let j in obj[i]){
      sum ++
    }
  }
  return sum */

  // 利用map来存储结果，减少时间复杂度
  const map = new Map()
  emails.forEach(item => {
    const data = item.split('@');
    const param = data[0].split("+")[0].replace(/\./g, '');
    const host = data[1]
    map.set(param+'@'+host, true)
  })
  return map.size;
};
// @lc code=end

