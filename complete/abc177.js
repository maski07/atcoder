'use strict'
const log = console.log;
function MainA(input){
    const [D, T, S] = input.split(' ');
	console.log(D/S <= T ? 'Yes' : 'No');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('1000 15 80')
// MainA('2000 20 100')
// MainA('10000 1 1')

function MainB(input){
    const [S, T] = input.split('\n');
    const Sarr = S.split('');
    const Tarr = T.split('');
    const box = [];
    // Tの文字列がSに含むか検索
    for(let i=0; i<Sarr.length-Tarr.length+1; i++){
        let findNum = 0;
        for(let j=0; j<Tarr.length; j++){
            // 文字が見つかったら
            if(Sarr[i+j] === Tarr[j]){
                findNum++;
            }
        }
        box.push(findNum);
    }
    console.log(Tarr.length-Math.max.apply(null, box));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('cabacc\nabc');
// MainB('codeforces\natcoder')
/**
 * cabacc
 *    abc
 */

/**
 * 計算量は1000回
 */
function MainB2(input){
    const [S, T] = input.split('\n');
    const Sarr = S.split('');
    const Tarr = T.split('');
    for(let i=Tarr.length; i>0; i--){
        const result = S.indexOf(Tarr.slice(0,i).join(''));
        log({result,str: Tarr.slice(0,i).join('')})
        if(result !== -1) {
            // 末尾の文字数を見たしていないなら次を探す
            if(result+Tarr.length<Sarr.length){
                console.log(Tarr.length-i);
                return;
            }
        }
    }
    // 見つからなかったらTarrの長さ全て
    console.log(Tarr.length);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('cabacc\nabc');
// MainB('codeforces\natcoder')

/**
 * 普通にやると計算量がN!通りになり、間に合わない
 * 
 * 累積和？
 */
function MainC(input){
    const [N , Aarr] = input.split('\n');
    const An = Aarr.split(' ');

}
/**
 * 最大の友達数だけグループを作れば良い
 */
function MainD(input){
    const arr = input.split('\n');
    const arrAB = arr.map(val => val.split(' '));
    const setAB = arr.map(val => new Set(val.split(' ')));
    // グループ数
    let groupNum = arrAB.length;
    for(let i=1; i<arrAB.length; i++){ //まず2つめから
        for(let j=0; j<i; j++){ // 1つ目をみる
            if((new Set(setAB[j])).has(arrAB[i][0]) || new Set(setAB[j][0]).has(arrAB[i][1])){
                groupNum--;
                break;
            }
        }
    }
    console.log(groupNum);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('5 3\n1 2\n3 4\n5 1');
