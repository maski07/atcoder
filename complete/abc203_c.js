/** メモ **/
'use strict'
/** 
 * 2 * 10^5 のfor文
 * 
 */
var log = console.log;
function Main(input){
	const [[N, K], ...[...AnBn]] = input.split('\n').map( a=>a.split(' ').map(Number));
    let currentAmount = K;
    // 村が近い友達順に並べる
    AnBn.sort((a, b) =>  a[0] - b[0]);
    for(let i=0; i<N; i++){
        const A_friend = AnBn[i][0];
        const B_getMoney = AnBn[i][1];
        // 村Aまでいけるか？
        if(currentAmount >= A_friend){
            // いけたらMoneyを増やす。
            currentAmount += B_getMoney;
        } else {
            // 無理なら終了
            break;
        }
    }
    // 最終的な合計金額が村Xまで行けたとこ
    log(currentAmount);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main('2 3\n2 1\n5 10');
Main('5 1000000000\n1 1000000000\n2 1000000000\n3 1000000000\n4 1000000000\n5 1000000000');
Main('3 2\n5 5\n2 1\n2 2');

