import * as fs from 'fs';

const length = 12;

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const counts = Array(length).fill(0);
  
  data.split("\n").map(n => parseInt(n, 2)).forEach(n => {
    for(let i = 0; i < length; i++) {
      counts[i] += (n & (1 << i)) >> i;
    }
  });

  let gamma = 0;

  for(const [i, n] of counts.entries()) {
    gamma += (n >= 500) << i;
  }
  
  const epsilon = (1 << length) - 1 - gamma;

  console.log(`Life Support Rating ${gamma * epsilon}`);
});