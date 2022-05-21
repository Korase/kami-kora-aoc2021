import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let aim = 0;
  let depth = 0;
  let horizontal = 0;

  data.split("\n").map(d => {
    const [direction, value] = d.split(" ");

    return {
      direction,
      value: Number(value)
    }
  }).forEach(({direction, value}) => {
    switch (direction) {
      case 'forward':
        horizontal += value;
        depth += value * aim;

        break;
      case 'down':
        aim += value;

        break;
      case 'up':
        aim -= value;
    }
  });

  console.log(`Depth times Horizontal: ${depth * horizontal}`);
});