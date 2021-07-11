/** メモ **/
'use strict'
var log = console.log;
/** メモ **/
function MainA(input){
    log(+input - 1);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainA('2');
MainA('1');
MainA('3');

var log = console.log;
/** メモ **/
function MainB(input){
    // 正規表現で削除 *はN回以上、$は末尾
    const str = input.replace(/0*$/gi, '');
    const rev = str.split('').reverse().join('');
    log(str == rev ? 'Yes' : 'No');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('1210');
// MainB('777');
// MainB('123456789');

var log = console.log;
/** メモ **/
function MainC(input){
    const [R, X, Y] = input.split(' ').map(Number);
	const Euclid = (x, y) => Math.sqrt(x ** 2 + y ** 2);
    const D = Euclid(X, Y);
    // この場合分けが必要な理由がわからない
    if(D!=R && D<=R+R) return log(2);
    log(Math.ceil(D / R));
}
/**
 * R < D && D < 2*R → 2
 * D / R + x = 2 (0<x<1 , R<D && D<2*R)にならないパターンは？
 */


// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('5 15 0');
// MainC('5 11 0');
// MainC('3 4 4');
