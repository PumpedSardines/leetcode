globalThis.ListNode = function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const modifiedList = require("./index");

function arrayToListNode(arr) {
  let head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

function listNodeToArray(node) {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

const out1 = modifiedList([1, 2, 3], arrayToListNode([1, 2, 3, 4, 5]));
const out2 = modifiedList([1], arrayToListNode([1, 2, 1, 2, 1, 2]));
const out3 = modifiedList([5], arrayToListNode([1, 2, 3, 4]));
const out4 = modifiedList([1, 2, 6], arrayToListNode([9, 6, 9]));

console.log("Out1", listNodeToArray(out1));
console.log("Out2", listNodeToArray(out2));
console.log("Out3", listNodeToArray(out3));
console.log("Out4", listNodeToArray(out4));
