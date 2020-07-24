/** C問題 
 * 深さ優先探索
 * 他の人は、stringで足すのではなく、numberを✖︎10してから足していた。
 * どっちでも良さそう
 * 
 * DFSを解くコツ
 *  予めどんな木構造になるのかを想定してからコーディングするととける
 * 
*/
"use strict"
function Main(input){
    const N = input.trim();
    const array = ['3', '5', '7'];
    let answer = 0;
    const DFS = (N, num753) => {
        // 753の数値を含んでいるかチェック
        const contains357 = array.map(val => num753.includes(val)).reduce((a, b) => a && b);
        // 桁数上限に達成
        if(N.length == num753.length){
            if(contains357 && Number(num753) <= Number(N)) answer++;
            return; 
        }
        // 現在の数値をチェック
        if(contains357 && Number(num753) <= Number(N)) answer++;
        // 3,5,7を入れていく
        array.forEach(val => DFS(N, num753 + val));
    }
    // 一桁目を入れる
    array.forEach(val => DFS(N, val));
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('575');
Main('3600');
Main('999999999');

/**
 * どんな木構造になるのか？
 *  N = 3桁なら木の深さは3つ
 * ーーーーーーーーーーーーーーーーー
 * 3 ┬ 3 ┬ 3 
 *   ┃   ┣ 5
 *   ┃   ┗ 7
 *   ┣ 5 ┬ 3
 *   ┃   ┣ 5
 *   ┃   ┗ 7
 *   ┗ 7 ┬ 3
 *       ┣ 5
 *       ┗ 7
 * 5 ┬ 3 ┬ 3 
 *   ┃   ┣ 5
 *   ┃   ┗ 7
 * 
 * 7 ┬ 3 ┬ 3 
 *   ┃   ┣ 5
 *   ┃   ┗ 7
 * ーーーーーーーーーーーーーーーーー
 */