/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const N = Number(input);
    const count = (N >= 42) ? N+1: N;
    console.log('AGC' + ('000' + count).slice(-3));
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('42');
// MainA('19');
// MainA('1');
// MainA('50');

/** 
 * xxo
 * xxox
 * xo
 * xox
 */
// xx 頭
// x 頭
// o おしり
// ox おしり
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB1(input){
	const S = input;
    const remaining = S.split('oxx').filter(x => x !== null).join('');
    const expected = new Set(['xxo', 'xxox', 'xo', 'xox', 'xx', 'x', 'o', 'ox', '']);
    if(expected.has(remaining)){
        console.log('Yes');
    } else {
        console.log('No');
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
function MainB(input){
	const S = input;
    const T = 'oxx'.repeat(10 ** 5);
    if(T.split(S).length >= 2){
        console.log('Yes');
    } else {
        console.log('No');
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('xoxxoxxo');
// MainB('xxoxxoxo');
// MainB('ox');
// MainB('oxx');
// MainB('o');

/** 
 * 
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
	const [[N, A, B], [P, Q, R, S]]
        = input.split('\n').map(a => a.split(' ').map(BigInt));
    const White = '.';
    const Black = '#';
    const pettern1 = {
        Smaller: 1n - A > 1n - B ? 1n - A : 1n - B
        , Bigger: N - A < N - B ? N - A: N - B
    };
    const pettern2 = {
        Smaller: 1n - A >  B - N ? 1n - A : B - N
        , Bigger: N - A < B - 1n ? N - A : B - 1n
    };
    const IsBlack = (k) => 
        pettern1.Smaller <= k && k <= pettern1.Bigger
        || pettern2.Smaller <= k && k <= pettern2.Bigger;
    // log({N, A, B, P, Q, R, S});
    // log(pettern1, pettern2);
    for(let i=R; i<=S; i++){ // 縦
        let output = '';
        // log({i, cal: P + i - 1n - A});
        if(IsBlack(i - A)){
            for(let j=P; j<=Q; j++) { // 横
                // log({j, cal: B - (R + j - 1n)})
                output += IsBlack(B - (j)) 
                        || IsBlack(B + (j)) ? Black : White;
            }
            console.log(output);
        } else {
            const rep = Number(S - R +1n);
            console.log(White.repeat(rep));
        }
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('5 3 2\n1 5 1 5');
// MainC('5 3 3\n4 5 2 5');
// MainC('1000000000000000000 999999999999999999 999999999999999999\n999999999999999998 1000000000000000000 999999999999999998 1000000000000000000');


