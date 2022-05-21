import * as fs from 'fs';

function solve(arr, gt) {
  for(let i = 11; i >= 0; i--) {
    if(arr.length == 1)
      break;

    const which = (arr.filter(n => (n & (1 << i)) >> i === 1).length >= Math.floor((arr.length + 1) / 2)) == gt;

    arr = arr.filter(n => ((n & (1 << i)) >> i) == which);
  }

  return arr[0];
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let oxy = data.split("\n").map(n => parseInt(n, 2));
  let co2 = [...oxy];

  console.log(`Life Support Rating ${solve(oxy, true) * solve(co2, false)}`);
});