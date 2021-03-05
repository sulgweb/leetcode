/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//首先题目的意思是末尾有几个0
//其中只有2*5末尾才有0，所以就可以抛去其他数据 专门看2 5 以及其倍数 毕竟 4 * 25末尾也是0
//一个2和一个5配对 就产生一个0 所以10！末尾2个0

//转头一想 2肯定比5多 所以只数5的个数就行了
var trailingZeroes = function(n) {
  let res=0
  while(n>=5){
    res += Math.floor(n/5)
    n /=5
  }
  return res
};
// @lc code=end

