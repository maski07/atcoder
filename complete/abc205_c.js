/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainC(input){
    const [A, B, C] = input.split(' ').map(Number);
    const pow = (x, y) => BigInt(x ** y);
    const AC = pow(A, C);
    const BC = pow(B, C);
    if(AC < BC){
        console.log('<');
    } else if(AC > BC){
        console.log('>');
    } else {
        console.log('=');
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('3 2 4');
// MainC('-7 7 2');
// MainC('-8 6 3');
var log = console.log;
function MainC2(input) {
    const [A, B, C] = input.split(' ').map(Number);
    const abs = (n) => Math.abs(n);
    const absA = abs(A);
    const absB = abs(B);
    if(A == B) return log('=');
    const isOdd = (n) => n % 2;
    const isMinus = (n) => n < 0;
    const powIsMinus = (x) =>  isOdd(C) && isMinus(x);
    const Output = (x, y) => (x > y) ? log('>'):log('<');
    const APowisPlus = !powIsMinus(A);
    const BPowisPlus = !powIsMinus(B);
    // log({isOdd:isOdd(C), APowisPlus, BPowisPlus})
    if(APowisPlus && BPowisPlus){
        Output(absA, absB);
    } else if (!APowisPlus && !BPowisPlus){
        Output(absA, absB);
    } else if(APowisPlus && !BPowisPlus) {
        log('>');
    } else if(!APowisPlus && BPowisPlus) {
        log('<');
    } 
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC2('3 2 4');
// MainC2('-7 7 2');
// MainC2('-8 6 3');
MainC2('599075145 -599075145 273071547');

var log = console.log;
function MainC3(input) {
    let [A, B, C] = input.split(' ').map(Number);
    if(C % 2 == 0) {
        A = Math.abs(A)
        B = Math.abs(B)
    }
    if(A < B) {
        console.log("<");
    } else if(A === B){
        console.log("=");
    }else{
        console.log(">");
    }
}
// MainC3(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC3('3 2 4');
// MainC3('-7 7 2');
// MainC3('-8 6 3');
/**
 * なぜ解けなかったのか？
 * → パターンの整理をしなかったから。
 */
