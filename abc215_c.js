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
MainC('aab 2');