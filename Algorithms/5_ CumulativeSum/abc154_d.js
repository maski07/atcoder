"use strict"
const log = (...val) => console.log(...val);
function Main(input){
    const arr = input.split('\n');
    const [N, K] = arr[0].split(' ').map(Number);
    const pi = arr[1].split(' ').map(Number);
    let maxNum = 0;
    let Knum = 0;
    for(let i=0; i<K; i++){
        Knum += pi[i];
    }
    maxNum = Knum;
    for(let i=K; i<pi.length; i++){
        Knum += pi[i]-pi[i-K];
        if(maxNum < Knum)  maxNum = Knum;
    }
    const answer = (maxNum+K)/2;
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main('5 3\n1 2 2 4 5')
Main('4 1\n6 6 6 6')
Main('10 4\n17 13 13 12 15 20 10 13 17 11')
