/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainC(input){
	const arr = input.split('\n');
    arr.shift();
    const map = new Map();
    const ans = [];
    for(let str of arr){
        const value = map.get(str);
        if(value){
            ans.push(`${str}(${value})`);
            map.set(str, value + 1);
        } else{
            ans.push(str);
            map.set(str, 1);
        }
    }
    console.log(ans.join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('5\nnewfile\nnewfile\nnewfolder\nnewfile\nnewfolder');
// MainC('11\na\na\na\na\na\na\na\na\na\na\na');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
