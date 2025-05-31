/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainC(input){
    const [_, ...tests] = input.split('\n').map(BigInt);
    for(const test of tests){
        let p, q;
        for(let i=2n; i<=test ** 1n/3n; i++){
            if(test % i === 0n){
                if(test % (i ** 2n) ===0n){
                    p = i;
                    q = test / (p**2n);
                } else {
                    p = sqrt(test / i, 2n);
                    q = i;
                }
                break;
            }
        }
        log(`${p} ${q}`);
    }
}
function sqrt(n, x0 = 1n) {
    const x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0;
    }
    return sqrt(n, x1);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3\n2023\n63\n1059872604593911');



