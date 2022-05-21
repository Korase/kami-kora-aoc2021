import * as fs from 'fs';

const totalCount = {
}

fs.readFile('./input.txt', 'utf8', (err, binaryTxt) => {
    const count = Array(12).fill(0);
    const count1 = Array(12).fill(0);
    if(err) throw err;
    binaryTxt = binaryTxt.split('\n').forEach(b => {
      for(let i = 0; i < 12; i++) {
        count[i] += b.split("")[i] == 1;
        count1[i] += b.split("")[i] != 1;
      }
    });
    let common = '';
    let uncommon = '';
    for(let i =0; i<count.length; i++) {
        (count[i] > count1[i]) ? common += 1:common += 0
    }
    for(let i =0; i<count.length; i++) {
        (count[i] < count1[i]) ? uncommon += 1:uncommon += 0
    }
    
    console.log(parseInt(common, 2) * ((1 << 12) - 1 - parseInt(common, 2)));
    //console.log(count1);
});