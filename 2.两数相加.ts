/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l3 = new ListNode(0)
  let curPoint = l3
  let temp = 0;
  while(l1||l2||temp){
    const v1 =l1?l1.val:0;
    const v2 = l2?l2.val:0;
    const val = v1+v2+temp;
    temp = Math.floor(val/10)
    curPoint.next = new ListNode(val%10)
    curPoint = curPoint.next
    if(l1){
      l1=l1.next
    }
    if(l2){
      l2 = l2.next
    }
  }
  return l3.next // 第一个节点未存值，取后续节点即为需要输出的内容
}
// @lc code=end
