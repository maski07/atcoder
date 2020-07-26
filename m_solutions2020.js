'use strict';

function MainA(input){
    const score = Number(input);
    let from = 600;
    let kyu = 8;
    while(true){
        if(score < from){
            console.log(kyu);
            return;
        }
        from += 200;
        kyu--;
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main('725');
// Main('1600');
function MainB(input){
    const arr = input.split('\n');
    const ABC_RGB = arr[0].split(' ').map(Number);
    const red = ABC_RGB[0];
    const green = ABC_RGB[1];
    const blue = ABC_RGB[2];
    const K = Number(arr[1]);
    let answer = 'No';
    const all = (red, green, blue, num) => {
        if(num <= 0){
            if(green>red && blue>green){
                answer = 'Yes';
                return;
            }
            return;
        }
        all(red*2, green,   blue,   num-1);
        all(red,   green*2, blue,   num-1);
        all(red,   green,   blue*2, num-1);
    }
    all(red, green, blue, K);
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('7 2 5\n3');
// Main('7 4 2\n3');
/**
 * K進数 = K^K通りの計算量
 * A A A
 * A A B
 * A A A
 * A B A
 * 再帰関数でK^K通り回して、できた数値で比較する
 * 条件が満たされていれば処理終了
 * 
 */

/**
 * これは、ひらめきの問題だ。
 * 前のスコアと次のスコアは
 * なくす点数と次にかける点数を比較すればYesとNoの判定ができる
 */
function Main(input){
    const arr = input.split('\n');
    const NK = arr[0].split(' ').map(Number);
    const Ai = arr[1].split(' ').map(Number);
    // N学期の出力
    for(let n = NK[1]+1; n<=NK[0]; n++){
        console.log(Ai[n-1] > Ai[n-(NK[1]+1)] ? 'Yes': 'No');
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('5 3\n96 98 95 100 20');
// Main('3 2\n1001 869120 1001');
Main('15 7\n3 1 4 1 5 9 2 6 5 3 5 8 9 7 9');
// Main('2 1\n100');

/**
 * N = 3, K=5
 * N = 3
 * 96 98 95 
 * 98 95 100
 * 
 */