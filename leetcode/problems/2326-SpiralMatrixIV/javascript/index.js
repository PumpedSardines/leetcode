function* spiralPositions(width, height) {
  let curWidth = width;
  let curHeight = height;

  let i = 0;
  let x = 0;
  let y = 0;

  while (true) {
    while (x < curWidth) {
      yield [x, y];
      x++;

      i++;
      if (i === width * height) return;
    }

    x--;
    curHeight--;

    while (y < curHeight) {
      y++;
      yield [x, y];

      i++;
      if (i === width * height) return;
    }

    while (x > width - curWidth) {
      x--;
      yield [x, y];

      i++;
      if (i === width * height) return;
    }

    curHeight--;

    while (y > height - curHeight) {
      y--;
      yield [x, y];

      i++;
      if (i === width * height) return;
    }

    curWidth -= 2;
    curHeight--;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  const retArr = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  let cursor = head;

  for (const [x, y] of spiralPositions(n, m)) {
    let val = -1;
    if (cursor) val = cursor.val;

    retArr[y][x] = val;

    if (cursor) cursor = cursor.next;
  }

  return retArr;
};
