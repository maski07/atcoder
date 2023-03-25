/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainC(input){
    const N = Number(input);
    let ans = 0n;
    for(let a = 1; a <= N; a++){
        for(let b = 1; b <= (N-1)/a; b++){
            const ab = a * b;
            for(let c = 1; c <= N/ab; c++){
                if(Number.isInteger((N-ab)/c)){
                    ans++;
                }
            }
        }
    }
    log(ans.toString().split('n')[0]);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('4');
MainC('292');
MainC('19876');