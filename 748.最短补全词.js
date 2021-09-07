/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// 先删除非字母的部分，然后将大写字母转小写字母并存入数组中
// 然后遍历words,看其是否符合

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let source = [];
  for (const c of licensePlate.toLocaleLowerCase()) {
    if (c.charCodeAt() >= 97 && c.charCodeAt() <= 122) {
      source.push(c.charCodeAt() - 97);
    }
  }

  return words.filter(word => {
    let map = Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      map[word.charCodeAt(i) - 97]++;
    }

    for (const code of source) {
      if (--map[code] < 0) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => a.length - b.length)[0]
};

/* console.log(shortestCompletingWord('1s3 PSt', ["steppla", "step", "steps", "stripe", "stepple", 'st'])) */
// @lc code=end

