/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split(' ').map(Number);
function MainA(input){
	console.log(Math.round(Number(input), 1));
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('3.456');
// MainA('99.500');
// MainA('0.000');

/**  */
var log = console.log;
var splitN = (N) => N.split(' ').map(Number);
function MainB(input){
	const arr = input.split('\n');
    const N = Number(arr.shift());
    const unique = new Set(arr);
    console.log(unique.size);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('4\n2 1 2\n2 1 1\n2 2 1\n2 1 2');
// MainB('5\n1 1\n1 1\n1 2\n2 1 1\n3 1 1 1');
// MainB('1\n1 1');

/**
 * 23/24ケース 1ケースのみなにか間違っている。
 * テストケースが出たら確認しておく。
 */
var log = console.log;
var splitN = (N) => N.split(' ').map(Number);
/** デバッグ */
function MainC(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    // 入力をnumber型にするとleariningの中でエラーで落ちる。
    const TKAs = arr.map(a => a.split(' ')/*.map(Number)*/);
    const learned = new Set();
    let times = 0n;
    // learningの中に問題あり。
    const learning = (x) => {
        // 入力をnumber型にせず、型チェックすると引っかかる。
        if(typeof x !== 'number') return;
        if(learned.has(x) || x === 0) return;
        const T = BigInt(TKAs[x-1].shift());
        const K = Number(TKAs[x-1].shift());
        const needToLearn = [...new Set(TKAs[x-1])].sort((a,b) => b-a); // 降順
        for(let j = needToLearn.length - 1; j >= 0; j--) {
            learning(needToLearn[j]);
        }
        // 習得！
        times += T;
        learned.add(x);
    }
    learning(N);
    console.log(String(times).split('n')[0]);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3\n3 0\n5 1 1\n7 1 1');
MainC('5\n1000000000 0\n1000000000 0\n1000000000 0\n1000000000 0\n1000000000 4 1 2 3 4');

function MainC2(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const TKAs = arr.map(a => a.split(' '));
    const need = new Array(N-1).fill(false);
    need[N-1] = true;
    for(let i=N-1; i>=0; i--){
        if(need[N-1]){
            for(let j = TKAs[i][1] - 1 + 2; j>=0+2; j--){
                need[TKAs[i][j]-1] = true;
            }
        }
    }
    let times = 0n;
    for(let i=0; i< need.length; i++){
        if(need[i]) times += BigInt(TKAs[i][0]);
    }
    console.log(String(times).split('n')[0]);
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC2('3\n3 0\n5 1 1\n7 1 1');
// MainC2('5\n1000000000 0\n1000000000 0\n1000000000 0\n1000000000 0\n1000000000 4 1 2 3 4');
