/**
 * 東京海上日動プログラミングコンテスト2020 
**/
"use strict"
function Main1(input){
    const arr = input.split("");
    console.log(arr[0] + arr[1] + arr[2]);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("takahashi");
// Main("naohiro");
/**
 * WAになったこと
 * ・A>Bのパターンを作らなかった
 * ・境界値確認の漏れ
 */
function Main(input){
    const arr = input.trim().split("\n");
    const AV = arr[0].split(" ").map(Number);
    const BW = arr[1].split(" ").map(Number);
    const T  = Number(arr[2]);
    if(Math.abs(AV[0]-BW[0]) <= T*(AV[1] - BW[1])){
        console.log("YES");
    } else{
        console.log("NO");
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("1 2\n3 1\n3");
Main("1 2\n3 2\n3");
Main("1 2\n3 3\n3");
Main("3 2\n1 1\n3");