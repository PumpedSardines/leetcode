/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  const paths = new Set();

  function recursive(root, prior = []) {
    if (!root) {
      return;
    }

    const current = [...prior, root.val];

    if (!root.left && !root.right) {
      paths.add(current.join(","));
    }

    if (root.left) {
      recursive(root.left, current);
    }

    if (root.right) {
      recursive(root.right, current);
    }
  }

  recursive(root);

  const destPath = (() => {
    const path = [];
    let cureHead = head;
    while (cureHead) {
      path.push(cureHead.val);
      cureHead = cureHead.next;
    }
    return path;
  })().join(",");

  for (const path of paths) {
    if (path.includes(destPath)) {
      return true;
    }
  }

  return false;
};
