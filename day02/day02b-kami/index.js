import * as fs from 'fs';

const down = {
    totalDownVal: 0
}
const forward = {
    totalForwardlVal: 0,
}
const depths = {
    totalDepth: 0
}
const up = {
    totalUpVal: 0
}
let aim = 0;
fs.readFile('./input.txt', 'utf8', (err, axis) => {
    if(err) throw new Error + err;
    const tempArr = axis.split('\n');
    tempArr.forEach(directions => {
        const arrayOfVal = directions.split(' ');
        
        const direction = arrayOfVal[0];
        switch (direction) {
            case 'down': {
                down.totalDownVal += parseInt(arrayOfVal[1]);
                aim += parseInt(arrayOfVal[1]);
                break;
            }
            case 'forward': {
                //adds the horizontal
                forward.totalForwardlVal += parseInt(arrayOfVal[1]);
                //adds the depth
                depths.totalDepth += aim*parseInt(arrayOfVal[1]);

                break;
            }
            case 'up': {
                up.totalUpVal += parseInt(arrayOfVal[1]);
                aim -= parseInt(arrayOfVal[1]);
                break;
            }
            default:
                console.log("Function did not run properly")
                break;
            }
        })
        /* console.log(forward);
        console.log(up);
        console.log(down); */
        console.log(`Depth: ${depths.totalDepth}`);
        console.log(`Horizontal position: ${forward.totalForwardlVal}`);
        console.log(`Aim: ${aim}`);
        const finalVal = depths.totalDepth * forward.totalForwardlVal;
        console.log(`Depth times Horizontal: ${finalVal}`);
    })
    