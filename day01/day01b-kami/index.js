import * as fs from 'fs'
import { readFile } from 'fs/promises';
const jsonData = JSON.parse(
  await readFile(
    new URL('data/input.json', import.meta.url)
    )
  )
//console.log(jsonData);
let biggerThan = 0;
let smallerThan = 0;
let currentNumber = 1;
let currentNumber2 = 2;
let currentNumber3 = 3;
let i = 0;
let test = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263,
]

for(i; i<=jsonData.length; i++) {
    console.log(currentNumber);
    let combinationA = jsonData[i] + jsonData[currentNumber] + jsonData[currentNumber2]
    let combinationB = jsonData[currentNumber] + jsonData[currentNumber2] + jsonData[currentNumber3]
    if(combinationA < combinationB) {
        biggerThan++;
    }
    else if(combinationA > combinationB) {
        smallerThan++;
    }
    else {
        console.log("Same as previous number")
    }
    currentNumber++;
    currentNumber2++;
    currentNumber3++;
}
console.log(`Total index is ${i}`);
console.log(`Num of Larger Measurements: ${biggerThan}`);
console.log(`Num of Smaller Measurements: ${smallerThan}`);