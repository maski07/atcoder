/** メモ **/
'use strict'

/**  */
var log = console.log;
function MainC(input){
	const [[N, K], [...An]] = input.split('\n').map(x => x.split(' ').map(Number));
    const AnSet = new Set(An);
    for(let i=0; i<N; i++){
        if(!AnSet.has(i)){
            log(Math.min(i, K));
            return;
        }
    }
    log(K);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('7 3\n0 2 2 9 1 3');

