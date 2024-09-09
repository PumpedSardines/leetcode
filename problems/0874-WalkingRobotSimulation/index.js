/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const verticalMap = new Map();
  const horizontalMap = new Map();

  for (const obstacle of obstacles) {
    const setVertical = verticalMap.get(obstacle[0]) ?? new Set();
    setVertical.add(obstacle[1]);
    verticalMap.set(obstacle[0], setVertical);

    const setHorizontal = horizontalMap.get(obstacle[1]) ?? new Set();
    setHorizontal.add(obstacle[0]);
    horizontalMap.set(obstacle[1], setHorizontal);
  }

  // North: 0, East: 1, South: 2, West: 3
  let dir = 0;
  let pos = [0, 0];
  let furthest = 0;

  command: for (const command of commands) {
    if (command < 0) {
      dir = command === -1 ? (dir + 1) % 4 : (dir + 3) % 4;
    } else {
      const movingVertical = dir % 2 === 0;
      const set = movingVertical
        ? verticalMap.get(pos[0])
        : horizontalMap.get(pos[1]);

      for (let i = 0; i < command; i++) {
        switch (dir) {
          case 0:
            if (set && set.has(pos[1] + 1)) continue command;
            pos[1]++;
            break;
          case 1:
            if (set && set.has(pos[0] + 1)) continue command;
            pos[0]++;
            break;
          case 2:
            if (set && set.has(pos[1] - 1)) continue command;
            pos[1]--;
            break;
          case 3:
            if (set && set.has(pos[0] - 1)) continue command;
            pos[0]--;
            break;
        }
        furthest = Math.max(furthest, pos[0] ** 2 + pos[1] ** 2);
      }
    }
  }

  // Calculate the final position
  return furthest;
};

if (module?.exports) {
  module.exports = robotSim;
}
