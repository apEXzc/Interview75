var copyRandomList = function (head) {
  if (head == null) {
    return null;
  }

  // 1. 复制每个节点并插入到原节点后面
  let current = head;
  while (current != null) {
    let newNode = new Node(current.val);
    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }

  // 2. 设置新节点的 random 指针
  current = head;
  while (current != null) {
    if (current.random != null) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // 3. 分离原链表和新链表
  current = head;
  let newHead = head.next;
  while (current != null) {
    let newNode = current.next;
    current.next = newNode.next;
    if (newNode.next != null) {
      newNode.next = newNode.next.next;
    }
    current = current.next;
  }

  return newHead;
};
