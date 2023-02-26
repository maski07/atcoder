/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const An = arr.shift().split(' ').map(Number);
    const M = Number(arr.shift());
    const Bn = arr.shift().split(' ').map(Number);
    const X = Number(arr)
    const dp = new Array(X+1)
    An.forEach(x => dp[x] = true);
    Bn.forEach(x => dp[x] = false);
    for(let i=0; i<=X; i++){
        if(dp[i]){
            // 現在地がXポイントならOK
            if(i === X){
                log('Yes');
                return;
            }
            // 次の移動先も移動可能にする
            An.forEach(x => {
                if(dp[x+i] === undefined){
                    dp[x+i] = true;
                }
            });
        }
    }
    log('No');
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3\n3 4 5\n4\n4 5 6 8\n15');
MainC('4\n2 3 4 5\n4\n3 4 5 6\n8');
MainC('4\n2 5 7 8\n5\n2 9 10 11 19\n20');


