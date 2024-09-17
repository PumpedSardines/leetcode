const insertGreatestCommonDivisors = require("./index");
globalThis.ListNode = function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

function fromArray(arr) {
  let head = new ListNode(arr[0]);
  let cursor = head;

  for (let i = 1; i < arr.length; i++) {
    cursor.next = new ListNode(arr[i]);
    cursor = cursor.next;
  }

  return head;
}

function toArray(head) {
  let cursor = head;
  let arr = [];

  while (cursor) {
    arr.push(cursor.val);
    cursor = cursor.next;
  }

  return arr;
}

const out = insertGreatestCommonDivisors(fromArray([18, 6, 10, 3]));
console.log(toArray(out));
