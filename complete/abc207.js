/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
	const [A, B, C] = input.split(' ').map(Number);
    console.log(A + B + C - Math.min.apply(null, [A, B, C]));
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('3 4 5');
// MainA('6 6 6');
// MainA('99 99 98');

/**
 * A B C D
 * 5 2 3 2
 * A:水色ボール個数
 * B:水色の増える個数
 * C:赤色の増える個数
 * D:D倍
 * 水 <= 赤 × D
 * x <= y * D
 * x + A <= y * D
 * N回増やすとすると。
 * A + N * B <= N * C * D
 * A + NB <= NCD
 * NB - NCD <= -A
 * NCD - NB >= A
 * N (CD - B) <= A
 *      2 * (3 * 2 - 2) <= 5
 * N  >= A / (CD - B)
 *    <= 5 / (3 * 2 - 2)
 */
function MainB(input){
    const [A, B, C, D] = input.split(' ').map(Number);
    // ゼロ除算
    if(C * D - B === 0) return console.log(-1);
    console.log(Math.max(-1, Math.ceil(A / (C * D - B))));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('5 2 3 2');
// MainB('6 9 2 3');
// MainB('6 9 2 0');

// function MainB1(input){
//     const [A, x, y, D] = input.split(' ').map(Number);
//     const accompulished = (x, y, A, D) = (x + A) <= y * D;
//     const answer = 0;
//     while(accompulished(x, y, A, D)){
//         answer++;
//     }
//     console.log(answer);
// }
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
/**
 * Arrayを作って全部埋めていく N = 2000回 2000*10^9でTRE
 *  
 */
function MainC(input){

}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
