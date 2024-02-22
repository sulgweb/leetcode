/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// hashmap方式
// var getIntersectionNode = function(headA, headB) {
//   if(!headA||!headB){
//     return null
//   }
//   const map = new Map()
//   while(headA){
//     map.set(headA, 1)
//     headA = headA.next
//   }

//   while(headB){
//     if(map.has(headB)){
//       return headB
//     }
//     headB = headB.next
//   }
//   return null
// };

// 双指针的方式
// https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/497750/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/
var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB){
      return null
    }
    let pa = headA
    let pb = headB
    while(pa !== pb){
      pa = pa === null ? headB : pa.next
      pb = pb === null ? headA : pb.next
    }
    return pa
  };
// @lc code=end


