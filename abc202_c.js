/** メモ **/
'use strict'
/** 
 * 配列の要素番号を利用する
 * 「同じような処理を何度も行う」ような問題においては、「前もって計算しておく」
 */
var log = console.log;
function Main(input){
    const lines = input.split('\n');
    const N  = lines[0].split(' ').map(Number)[0];
    const An = lines[1].split(' ').map(Number);
    const Bn = lines[2].split(' ').map(Number);
    const Cn = lines[3].split(' ').map(Number);
    const Dn = Cn.map(C => Bn[C-1]);
    const T = new Array(N + 1).fill(0);
    for(let i=0; i<N; i++){
        T[Dn[i]]++;
    }
    let answer = 0;
    for(let i=0; i<N; i++){
        answer += T[An[i]];
    }
    log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main('3\n1 2 2\n3 1 2\n2 3 2');
Main('4\n1 1 1 1\n1 1 1 1\n1 2 3 4');
Main('3\n2 3 3\n1 3 3\n1 1 1');
