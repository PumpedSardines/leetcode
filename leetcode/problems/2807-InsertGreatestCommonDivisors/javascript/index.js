/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let cursor = head;

  while (cursor.next) {
    const gcd = getGcd(cursor.val, cursor.next.val);
    cursor.next = new ListNode(gcd, cursor.next);
    cursor = cursor.next.next;
  }

  return head;
};

function getGcd(a, b) {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
}
