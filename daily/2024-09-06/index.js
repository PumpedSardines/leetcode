/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const set = new Set(nums);
  let node = head;
  let cursor = head;

  while (set.has(cursor.val)) {
    node = cursor.next;
    cursor = cursor.next;
  }

  while (cursor) {
    while (cursor.next && set.has(cursor.next.val)) {
      cursor.next = cursor.next.next;
    }
    cursor = cursor.next;
  }

  return node;
};

if (module?.exports) {
  module.exports = modifiedList;
}
