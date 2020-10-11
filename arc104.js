'use strict'
const log = console.log;
function MainA(input){

    const [A, B] = input.split(' ').map(Number);
    console.log((A+B)/2, (A-B)/2);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainA('2 -2')

function MainB(input){
    const [N, S] = input.split(' ').map(Number);
	
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
