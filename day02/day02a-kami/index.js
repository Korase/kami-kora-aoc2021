import * as fs from 'fs';

const down = {
    totalDownVal: 0
}
const forward = {
    totalForwardlVal: 0
}
const up = {
    totalUpVal: 0
}

fs.readFile('./input.txt', 'utf8', (err, axis) => {
    if(err) throw new Error + err;
    const tempArr = axis.split('\n');
    tempArr.forEach(directions => {
        const arrayOfVal = directions.split(' ');
        
        const direction = arrayOfVal[0];
        switch (direction) {
            case 'down': {
                down.totalDownVal += parseInt(arrayOfVal[1]);
                break;
            }
            case 'forward': {
                forward.totalForwardlVal += parseInt(arrayOfVal[1]);
                break;
            }
            case 'up': {
                up.totalUpVal += parseInt(arrayOfVal[1]);
                break;
            }
            default:
                break;
            }
        })
        /* console.log(forward);
        console.log(up);
        console.log(down); */
        const depth = down.totalDownVal - up.totalUpVal;
        console.log(`Depth: ${depth}`);
        const finalVal = forward.totalForwardlVal * depth;
        console.log(`Depth times Horizontal: ${finalVal}`);
    })
    