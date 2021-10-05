/** メモ **/
'use strict'
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
/** 
 * ■ アルゴリズム
 *  まず全部足す sumAn
 *    floor(X/sumAn)の回数でXを超えることになる。
 *    その閾値で、Anを後何回足すとfloorを超えるのかを算出する
 *      
 */
function MainC(input){
    const arr = input.split('\n');
    const N = arr.shift() - 0;
    const An = arr.shift().split(' ');
    const sumAn =  An.reduce((a,b) => Number(a) + Number(b), []);
    const X = arr.shift() - 0;
    let count = Math.floor(X/sumAn);
    let sum = sumAn * count;
    count *=  N; // Anの数だけ
    log({count, An})
    for(let i=0; i<N; i++){
        sum += Number(An[i]);
        count++;
        if(sum > X){
            break;
        }
    }
    console.log(count);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3\n1 1 40\n42');
// MainC('3\n3 5 2\n26');
// MainC('4\n12 34 56 78\n1000');