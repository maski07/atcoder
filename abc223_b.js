/** メモ **/
'use strict'

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
    const S = [];
    const len = input.length;
    for(let i=0; i < len; i++) {
        const str = input.substr(i, len) + input.substr(0, i);
        S.push(str);
    }
    S.sort();
    console.log(S[0]);
    console.log(S[len-1]);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('aaba');
// MainB('z');
// MainB('abracadabra');
