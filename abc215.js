/** メモ **/
'use strict'

/** 
 * 10^18 = (2*5)^18 = (2*2*2)^18 = 2^58
 */
 var log = console.log;
 var split = (N) => N.split().split(' ').map(Number);
 function MainB(input){
    let N = BigInt(input);
    let count = 0;
    while(N / 2n){
        count++;
        N /= 2n;
    }
    console.log(count);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());

var log = console.log;
var split = (N) => N.split().split(' ').map(Number);
function MainC(input) {
    const [S, K] = input.split(' ');
    const res = S.split('');
    const set = new Set();
    const createAllSort = (arr) =>{
        const first = res.shift();
        return first + createAllSort(arr);
    }
    createAllSort(res);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());





