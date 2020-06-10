"use strict"
function Main1(input){
    const arr = input.split(' ');
    console.log(Number(arr[0]) * Number(arr[1]));
}
// Main('2 5');
// Main('100 100');

function Main2(input){
    const arr = input.trim().split('\n')[1].split(' ').map(BigInt);

    let count = 1n;
    if(arr.includes(0n) >0){
        console.log(0);
        return;
    }
    for(let num of arr){
        count *= num;
        if(count > BigInt(1000000000000000000)){
            console.log(-1);
            return;
        }
    }    
    console.log(count.toString());// Number型は15桁まで、ここでNumberにするとその時点で16桁あると誤差が生じる
}

// Main('2\n1000000000 1000000000')
// Main('3\n101 9901 9999990000001')
// Main('31\n4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5 0')
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// console.log(BigInt(101*9901*999999000001))
// console.log(Number.MAX_VALUE)

function Main3(input){
    const arr = input.trim().split(' ').map(Number);
    const result = arr[0]*arr[1];
    console.log(Math.floor(result));
}
// Main('198 1.10')
// Main('1 0.01')
// Main('1000000000000000 9.99')

// function Main(input){
    
// }

/**
 * ABC167
 */

/**
 * 2問目
 */
function Main167_2(input){
    const arr = input.split(' ').map(Number);
    const num = arr[3]-arr[0];
    if(num>=0){
        let K = num-arr[1];
        console.log(K>0 ? arr[0]-K:arr[0]);
    } else {
        console.log(arr[3]);
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main('2 1 1 3');
// Main('1 2 3 4');
// Main('2000000000 0 0 2000000000');

/**
 * 3問目 Skill Up
 * https://atcoder.jp/contests/abc167/tasks/abc167_c
 */
function Main(input){
    let arr = input.split('\n').map(Number);
    const [N, M, X] = arr.shift().split(' ').map(Number);
    arr = arr.map(a=>a.split(' '));
    let verticalArr = []
    // 配列の縦要素を作成
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length;j++){
            verticalArr[i].push(arr[i][j]);
        }
    }
    console.log(verticalArr);
}
Main('3 3 10\n60 2 2 4\n70 8 7 9\n50 2 3 9');
// Main('3 3 10\n100 3 1 4\n100 1 5 9\n100 2 6 5');
// Main('8 5 22\n100 3 7 5 3 1\n164 4 5 2 7 8\n334 7 2 7 2 9\n234 4 7 2 8 2\n541 5 4 3 3 6\n235 4 8 6 9 7\n394 3 6 1 6 2\n872 8 4 3 7 2');
 