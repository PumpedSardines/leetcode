a = arguments[0];
o = (x, y) => x * 4 + 2 + (y * 2 + 1) * 38;
d = (s, t) => ~~(s / t);

solve = (board, index) => {
  let x = index % 9;
  let y = d(index, 9);
  bx = d(x, 3) * 3;
  by = d(y, 3) * 3;
  if (index == 81) return true;
  if (board[o(x, y)] != " ") return solve(board, index + 1);

  const pool = {};
  // Check current line
  for (i = 0; i < 9; i++) pool[board[o(i, y)]] = 1;
  for (i = 0; i < 9; i++) pool[board[o(x, i)]] = 1;
  for (i = 0; i < 9; i++) {
    cx = bx + (i % 3);
    cy = by + d(i, 3);
    pool[board[o(cx, cy)]] = 1;
  }
  for (let i = 1; i <= 9; i++) {
    board[o(x, y)] = i;
    if (!pool["" + i] && solve(board, index + 1)) {
      return true;
    }
  }
  board[o(x, y)] = " ";
  return false;
};

b = arguments[0].split("");
solve(b, 0);
print(b.join(""));
