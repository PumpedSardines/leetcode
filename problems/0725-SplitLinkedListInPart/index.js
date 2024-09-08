/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  const length = getLengthOfList(head);
  const partLength = Math.floor(length / k);
  let diff = length - partLength * k;

  let parts = [];
  let curPart = undefined;
  let curPartHead = undefined;

  let curLength = partLength;
  if (diff >= 1) {
    curLength += 1;
    diff--;
  }

  let cursor = head;

  while (cursor) {
    const curNode = new ListNode(cursor.val);
    if (curPart) {
      curPartHead.next = curNode;
      curPartHead = curNode;
    } else {
      curPartHead = curNode;
      curPart = curNode;
    }
    curLength--;

    if (curLength === 0) {
      parts.push(curPart);
      curPart = undefined;

      curLength = partLength;
      if (diff >= 1) {
        curLength += 1;
        diff--;
      }
    }

    cursor = cursor.next;
  }

  if (parts.length <= k) {
    const count = k - parts.length;
    for (let i = 0; i < count; i++) {
      parts.push(null);
    }
  }

  return parts;
};

function getLengthOfList(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}
