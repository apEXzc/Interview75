/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
//快慢指针
//快指针先走cnt步
//之后 两个指针一起行动
//当快指针null的时候 慢指针指向的便是要从后往前删除的
var trainingPlan = function (head, cnt) {
  let fastPtr = head;
  let slowPtr = head;
  for (let i = 0; i < cnt; i++) {
    fastPtr = fastPtr.next;
  }
  while (fastPtr != null) {
    fastPtr = fastPtr.next;
    slowPtr = slowPtr.next;
  }
  return slowPtr;
};
