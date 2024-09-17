// For this entry i had to look up the solution.
// I now understand it but the logic of this code was not invented by me.

function findTheLongestSubstring(s) {
  let hashStarts = new Map();
  hashStarts.set(0, -1);

  let longest = 0;
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    hash ^= calcHash(c);

    if (hashStarts.has(hash)) {
      longest = Math.max(longest, i - hashStarts.get(hash));
    } else {
      hashStarts.set(hash, i);
    }
  }

  return longest;
}

function calcHash(v) {
  const vv = ["a", "i", "o", "e", "u"];

  const i = vv.indexOf(v);

  if (i === -1) {
    return 0;
  }

  return 1 << i;
}
