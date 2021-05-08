'use strict'
var log = console.log;
/** メモ **/
function MainA(input){
    const [A, B, C] = input.split(' ').map(a => Number(a));
    const double = (a) => a * a;
    const pow = (a) = Math.pow()
    double(A) + double(B) < double(C) 
        ? log('Yes')
        : log('No');
} 
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// Main('2 2 4');
// Main('10 10 10');
// Main('3 4 5');

var log = console.log;
function MainB(input){
    const [N, [...An], [...Bn]] = input.split('\n').map(a => a.split(' ').map(Number));
    const Amax = Math.max.apply(null, An);
    const Bmax = Math.min.apply(null, Bn);
    const result = Bmax - Amax + 1;
    log(Math.max(result, 0));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// MainB('2\n3 2\n7 5');
// MainB('3\n1 5 3\n10 7 3');
// MainB('3\n3 2 5\n6 9 8');

/**
 * 計算量 O(QN) → O(N + Q)にする問題
 */
var log = console.log;
function MainC(input) {
    const [strN , S, Q , ...TAB1array] = input.split('\n');
    const N = Number(strN);
    const tab2Array = TAB1array.map(a => a.split(' ').map(Number));
    let s = S.split('');
    let invert = false;
    // 計算量：O(Q)
    tab2Array.forEach(TAB => {
        let [T, A, B] = [...TAB];
        if(T == 1) {
            A -= 1;
            B -= 1;
            // T = 2を外だししたので、T=2が実行されている場合は、
            // 配列のアクセスを逆にしないといけない。
            if(invert) {
                A = A < N ? A + N:  A - N;
                B = B < N ? B + N:  B - N;
            }
            const tmp = s[A];
            s[A] = s[B];
            s[B] = tmp;
        } else if(T == 2) {
            // ここを毎回実行していたら処理量が大きくなるというのが今回の問題のミソ
            // 毎回実行の場合、計算量はO(QN)になる。
            // Qはforの回数：Nは文字列の分割箇所
            invert = !invert;
        }
    });
    const swapPreSufFrom = (str, N) => {
        // slice (https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
        // slice(0, N) → 計算量O(N) 0~N文字まで順にアクセスしていく
        const sA = str.slice(0, N);
        const sB = str.slice(N, S.length);
        return [...sB, ...sA];
    }
    if(invert) {
        s = swapPreSufFrom(s, N);
    }
    log(s.join(''));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('2\nFLIP\n2\n2 0 0\n1 1 4');
MainC('2\nFLIP\n6\n1 1 3\n2 0 0\n1 1 2\n1 2 3\n2 0 0\n1 1 4');
