/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);

function getPotentialOfWinner(potential, k) {
    let winnerP = potential.shift();
    log(potential);
    let winCount = 0;
    while(true){
        const targetP = potential.shift();
        log(winnerP, targetP);
        if(winnerP > targetP){
            winCount++;
            if(winCount >= k){
                break;
            }
            // target moves to the back
            potential.push(targetP);
        } else {
            winCount = 1;
            // winner moves to the back
            potential.push(winnerP);
        }
        log(potential, winCount);
    }
    return winnerP;
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
log(getPotentialOfWinner([1,3,2,4,5],2));
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
