/*
 * 删除给定的节点而不直接访问链表的头部
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  //本来应该把自己毙了的 但是不知道prev节点 无法实现
  //但是可以把自己的儿子毙了 让自己化妆成自己的儿子即可实现
  let son = node.next.val;
  node.val = son;
  node.next = node.next.next;
  return;
};
