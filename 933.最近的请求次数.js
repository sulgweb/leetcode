/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// 题目描述有点懵
// 大概意思是获取最近3000ms的所有ping
// 利用数组模拟栈即可

// @lc code=start

var RecentCounter = function() {
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t);
  while(this.queue[0]< t - 3000){
    this.queue.shift()
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

