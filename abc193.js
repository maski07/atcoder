'use strict'
/**  */
var log = console.log;
function MainA(input){
    const [A, B] = input.split(' ').map(Number);
    log((A-B)*100/A);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainA('100 80')
MainA('7 6')
MainA('99999 99998')

/** 
 * 約数を出して、その約数が全て同じでなければa^bで表せない
 */
var log = console.log;
function MainC(input) {
    const N = Number(input);
    const divisorNum = (n) => {
        const divsorsSet = new Set();
        const divisor = (n) => {
            // log({n});
            if(n==1) return;
            for(let i = 2; i<n; i++){
                // log({i, n})
                if(n % i == 0) {
                    divisor(n/i);
                };
            }
            // log(n)
            divsorsSet.add(n);
        }
        divisor(n);
        return divsorsSet.size == 1 ? 0: divsorsSet.size
    }
    let answer = 0;
    for(let i = 1; i<= N; i++){
        answer += divisorNum(i);
    }
    log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('8');
// MainC('100000');