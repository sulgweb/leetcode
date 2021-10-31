/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// 暴力解法
// 利用数组存储元音字母
// 遍历，判断第一个字母是否为元音字母，然后进行不同的数据处理
// 最后使用join(),将数组转回字符串

// 优化，利用toLocaleLowerCase将大写转小写，可以减少数组includes的判断次数

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const arr = ['a','e','i','o','u'];
  const sArr = sentence.split(' ');
  let aStr = 'a'
  const res = sArr.map((item) => {
    let data;
    const firstWord = item.substr(0,1)
    if(!arr.includes(firstWord.toLocaleLowerCase())){
      data = item.substr(1,item.length-1) + firstWord
    }else{
      data = item
    }
    data += 'ma' + aStr
    aStr += 'a'
    return data;
  }).join(" ")
  return res
};
// @lc code=end

