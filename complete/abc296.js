/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const S = arr.shift().split('');
    let tmp = S.shift();
    for(const str of S){
        if(tmp === str){
            return log('No');
        }
        tmp = str;
    }
    log('Yes');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('6\nMFMFMF');
// MainA('9\nFMFMMFMFM');
// MainA('1\nF');

/**  */
var log = console.log;
function MainB(input){
    const S8 = input.split('\n').map(a => a.split(''));
    const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let alp_n = 0;
    let wide = 8;
    for(let i=0; i < 8; i++) {
        for(let j=0; j < 8; j++){
            if(S8[i][j] === '*'){
                const first = alp[alp_n];
                log(first + wide);
                return;
            }
            alp_n++;
        }
        wide--;
        alp_n = 0;
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('........\n........\n........\n........\n........\n........\n........\n*.......');
// MainB('........\n........\n........\n........\n........\n.*......\n........\n........');

/**  */
var log = console.log;
function MainC(input){
    const [[N, X], [...An]] = input.split('\n').map(a => a.split(' ').map(Number));
    const set = new Set(An);
    for(let i=0; i< N; i++){
        if(set.has(An[i] - X) || set.has(An[i] + X)){
            log('Yes');
            return;
        }
    }
    log('No');
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('6 5\n3 1 4 1 5 9');
// MainC('6 -4\n-2 -7 -1 -8 -2 -8');
// MainC('2 0\n141421356 17320508');


var log = console.log;
function MainD(input){
    const arr = input.split(' ');
    const N = BigInt(arr.shift());
    const M = BigInt(arr.shift());
    // log(N);
    let ans = BigInt.MAX_VALUE;
    for(let i = 1n; i <= N; i++){
        const a = i;
        const b = M % i === 0n ? M / i : (M / i) + 1n;
        if (a <= N  && b <= N) {
            // log(a, b, a * b);
            ans = ans < a * b ? ans : a * b;
        }
        if(i > b) break;
    }
    log(ans === BigInt.MAX_VALUE ? -1 : String(ans).split('n')[0]);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('5 7');
MainD('2 5');
MainD('100000 10000000000');
