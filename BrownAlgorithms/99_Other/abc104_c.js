/**
 * bit全探索の問題
 */

function Main(input){
    const arr = input.split('\n');
    const DG = arr.shift().split(' ').map(Number);
    const Ci = arr.map(val => val.split(' ').map(Number));
    log(DG, Ci);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const log = (...val) => console.log(...val);
Main('2 700\n3 500\n5 800')
// Main('2 2000\n3 500\n5 800')
// Main('2 400\n3 500\n5 800')

/**
 * 解き方
 * 配点 ✖︎ 問題数 + ボーナス = 1列の総得点
 * 1列の総得点が一番大きい列から解く
 * 
 * Goal-(1列の総得点) < 0
 *   1列の得点を1つずつ引いていく
 *   問題数を足していく
 * 
 */