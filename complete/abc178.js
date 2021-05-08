'use strict'
const log = console.log;
function MainA(input){
    console.log(Number(input) ? 0 : 1);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// Main("1")
// Main("0")

/**
 * a b c d 
 * + + + + b*d
 * + + - + b*d
 * + + - - a*d
 * - + + + b*d
 * - + - + b*d
 * - + - - Max(a*d, 
 * - - + +
 * - - - +
 * - - - -
 *  
 */
// function MainB(input){
//     const [a,b,c,d] = input.split(' ').map(BigInt);
//     // + * + or - * - 大きい数字を選ぶ
//     let bigNum = 0;
//     let smallNum = 0;
//     // 大きい数字のチェック
//     if(b>=0 && d>=0 || b<=0 && d<=0){ 
//         bigNum = b*d;
//     // + * - or - * + マイナスは小さい数字を選ぶ
//     } else if(b>=0 && d<0){
//         bigNum = b*c; 
//     } else if(b<0 && b>=0){
//         bigNum = a*c;
//     }
//     // 小さい数字のチェック
//     console.log(answer)
// }
/**
 * 線形で考えると、/ or \ しかないので、最大値だけ選べばOK
 */
function MainB(input){
    const [a,b,c,d] = input.split(' ').map(BigInt);
    const ac = a*c;
    const ad = a*d;
    const bc = b*c;
    const bd = b*d;
    // log({ac,ad,bc,bd})
    const acVSbc = ac > bc ? ac : bc;
    const adVSbd = ad > bd ? ad : bd;
    // log({acVSbc, adVSbd});
    console.log(acVSbc > adVSbd ? String(acVSbc).split('n')[0] : String(adVSbd).split('n')[0]);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB("1 2 1 1");
// MainB("3 5 -4 -2");
// MainB("-1000000000 0 -1000000000 0");
function MainC(input){
    const N = Number(input);
    const num = N*N - N;
    console.log(num % (10**9+7));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('2')
// MainC('1')
MainC('869121')