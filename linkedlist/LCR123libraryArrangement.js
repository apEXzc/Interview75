/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function (head) {
  // 双指针翻转列表
  /*   let prev = null; // 前一个节点
  let curr = head; // 当前节点

  while (curr !== null) {
    let nextTemp = curr.next; // 保存下一个节点
    curr.next = prev; // 反转当前节点的指针
    prev = curr; // 前一个节点移动到当前节点
    curr = nextTemp; // 当前节点移动到下一个节点
  }

  return prev; // 新的头节点 
  */

  //本题竟然要求返回数组 利用栈的性质先进后出即可解决
  let arr = [];
  while (head != null) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
};
