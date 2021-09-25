/** メモ **/
'use strict'

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
    const [S, K] = input.split(' ');
    const arr = S.split('');
    const all = [];

    const search = (strArr, answer = '') => {
        console.log({strArr});
        if(strArr.length === 1) return all.push(answer + strArr[0]);
        for(let i=0; i<strArr.length; i++){
            const str = strArr[i];
            // spliceが違う
            search(strArr.splice(i, i+1), answer + str);
            console.log(str);
        }
    }
    search(arr);
    console.log(all);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('aab 2');

/**
 * アルゴリズム：
 *  すべての辞書順を作成して、Setに入れる 8! = 40320 × 
 *  ソートする 40320 log 40320
 *  K番目を出力する
 * 計算量：
 *  
*/
function MainC2(input) {
    const arr = input.split(' ');
    const [S, K] = [arr[0], Number(arr[1])];
    const Sarr = S.split('');
    const strArr = new Set();
    const createAllDic = (target, str = '') => {
        if(target.length === 0) {
            strArr.add(str);
        }
        for(let i=0; i<target.length; i++) {
            const newStr = target[i];
            const newLest = target.filter((val, j) => j !==i );
            createAllDic(newLest, str + newStr);
        }
    };
    createAllDic(Sarr);
    const dic = [...strArr].sort((a, b) => a > b ? 1 : -1);
    console.log(dic[K-1]);
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('aab 2');
MainC2('aab 2');
MainC2('baba 4');
MainC2('ydxwacbz 40320');