'use strict'
/**  */
var log = console.log;
function Main(input){
    const N = +input;
    for(let a=1; a<10; a++) {
        if(N % a == 0 && N / a < 10){
            return console.log('Yes');
        }
    }
    return console.log('No');
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main('10');
Main('50');
Main('81');