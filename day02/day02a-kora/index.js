import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
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

        break;
      case 'down':
        depth += value;

        break;
      case 'up':
        depth -= value;
    }
  });

  console.log("Depth times Horizontal: " + depth * horizontal);
});