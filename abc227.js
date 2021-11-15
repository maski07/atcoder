/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const [N, K, A] = input.split(' ').map(Number);
    // const remaining = N % K - (A - 1);
    let person = A - 1;
    let remaining = K;
    while(remaining > 0){
        if(person < N) {
            person++;
        } else{
            person = 1;
        }
        // 配ったから
        remaining--;
    }
    console.log(person);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('3 3 2');
// MainA('1 100 1');
// MainA('3 14 2');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
    const [N, [...Sn]] = input.split('\n').map(a => a.split(' ').map(Number));
    // 全パターンを作成
    let pattern = new Set();
    let a = 1;
    let b = 1;
    const area  = (a, b) => 4 * a * b + 3 * a + 3 * b;
    while(a <= Math.ceil(1000/7)) {
        while(b <= (1000 - 3 * a)/ (4 * a + 3)) {
            pattern.add(area(a, b));
            b++;
        }
        a++;
        b=1; // 初期化
    }
    let answer = 0;
    // パターンに合致しない人の人数を出力する
	for(let i=0; i<N; i++){
        if(!pattern.has(Sn[i])) answer++;
    }
    // log([...pattern].sort((a,b) => a-b));
    console.log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('3\n10 20 39');
// MainB('5\n666 777 888 777 666');
function MainC(input){

}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
/** 計算量足らないバージョン */
function MainC_sample(input){
    const N = Number(input);
    let answer = 0;
    for(let a=1; a <=N; a++){
        for(let b=1; b<=N; b++){
            for(let c=1; c<=N/a*b; c++){
                if(a * b * c <= N && a <= b && b <= c){
                   answer++;
                }
            }
        }
    }
    console.log({N, answer, minus:answer-N});
}
let i=1;
while(i<=50){
    MainC_sample(i);
    i++;
}

function MainD(input){
    const arr = input.split('\n');
    const [N, K] = arr.shift().split(' ').map(a => BigInt(a));
    const An = arr.shift().split(' ').map(a => BigInt(a));
    if(N === 1n){
       return console.log(An[0]);
    }
    const answer = String(An.reduce((a,b) => a + b) / K).split('.')[0].split('n')[0];
    console.log(answer);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainD('3 3\n2 3 4');
// MainD('4 2\n1 1 3 4');
// MainD('4 3\n1 1 3 4');
