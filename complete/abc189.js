'use strict'
const log = console.log;
/** メモ **/
function MainB(input){
    const arr = input.split('\n');
    const [N, X] = arr.shift().split(' ').map(Number);
    const VP = arr.map(x => x.split(' ').map(Number));
    let drank = 0;
    let answer = -1;
    for(let i=0; i<VP.length; i++){
        drank += VP[i][0] * VP[i][1];
        if(drank > X*100){
            answer = i+1;
            break;
        }
    }
    console.log(answer) 
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// Main('2 15\n200 5\n350 3')
// Main('2 10\n200 5\n350 3')
// Main('3 1000000\n1000 100\n1000 100\n1000 100')
MainB('3 13\n30 13\n35 13\n35 13')

function MainC(input){
    const [N, arr] = input.split('\n');
    const An = arr.split(' ');
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
