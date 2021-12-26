/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const [[...S1], [...S2]] = input.split('\n').map(a => a.split(''));
    const white = '.';
    if(S1[0] === white && S2[1] === white
        || S1[1] === white && S2[0] === white){
            console.log('No');
        } else {
            console.log('Yes');
        }
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('##\n.#');
// MainA('.#\n#.');
/** 
 * reverseしなくても%10を使えばもっとソースがきれいになる。
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
    const [A, B] = input.split(' ').map(x => x.split('').reverse().join(''));
    const minLen = Math.min(A.length, B.length);
    for(let i=0;i<minLen; i++){
        const result = Number(A[i]) + Number(B[i]);
        // log(i, A[i], B[i]);
        if(result >= 10){
            console.log('Hard');
            return;
        } 
    }
    console.log('Easy');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('229 390');
// MainB('123456789 9876543210');

function MainC(input) {
    const arr = input.split('\n');
    const [N, W] = arr.shift().split(' ');
    const [...ABn] = arr.map(a => a.split(' ').map(Number));
    // 美味しいもの順に並べる
    ABn.sort((a,b) => b[0] - a[0]);
    let totalDeli = 0n;
    let totalGram = 0;
    for(let i=0; i<N; i++){
        const delicious = ABn[i][0];
        const gram = ABn[i][1];
        // log({totalDeli,totalGram,delicious, gram})
        // 食べ切れる
        if(totalGram + gram <= W) {
            totalDeli += BigInt(delicious * gram);
            totalGram += gram;
        } else {
            // 食べきれない
            totalDeli += BigInt(delicious * (W - totalGram));
            break;
        }
    }
    console.log(String(totalDeli).split('n')[0]);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('3 5\n3 1\n4 2\n2 3');
// MainC('4 100\n6 2\n1 5\n3 9\n8 7');
// MainC('10 3141\n314944731 649\n140276783 228\n578012421 809\n878510647 519\n925326537 943\n337666726 611\n879137070 306\n87808915 39\n756059990 244\n228622672 291');

function MainD(input) {
    const arr = input.split('\n');
    const S = arr.shift();
    const K = Number(arr.shift());
    let dotCount = 0;
    let answer = 0;
    let nowX = 0;
    const X = 'X';
    const DOT = '.';
    for(let i=0; i<S.length; i++){
        if(S[i] === X){
            nowX++;
        } else {
            dotCount++;
            // dot変更可能
            const canChangeDot = dotCount <= K;
            if(canChangeDot){
                nowX++;
            } else {
                // うしろを切っていく
                let j = i - nowX;
                while(dotCount > K && j < i) {
                    if(S[j] === DOT){
                        dotCount--;
                    } else {
                        j++;
                        nowX = Math.max(0, nowX-1);
                    }
                }
            }
        }
        answer = Math.max(answer, nowX);
    }
    console.log(answer);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('XX...X.X.X.\n2');
MainD('XXXX\n200000');
