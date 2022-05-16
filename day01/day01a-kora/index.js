import * as fs from 'fs';
import {windows} from '../../utility.mjs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
  console.log(
    "Num of Larger Measurements: "
    + windows(data.split("\n").map(n => Number(n)), 2).filter(d => d[0] < d[1]).length
  );
});