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
  let returnListHead = undefined;
  let returnList = undefined;

  while (node) {
    const val = node.val;

    if (!set.has(val)) {
      if (!returnList) {
        returnListHead = new ListNode(val);
        returnList = returnListHead;
      } else {
        const newList = new ListNode(val);
        returnListHead.next = newList;
        returnListHead = newList;
      }
    }

    node = node.next;
  }

  return returnList;
};

if (module?.exports) {
  module.exports = modifiedList;
}
