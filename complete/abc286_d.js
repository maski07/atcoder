/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainC(input) {
    const arr = input.split('\n');
    const [N, X] = arr.shift().split(' ').map(Number);
    const ABn = arr.map(x => x.split(' ').map(Number));
    const canPay = new Array(X).fill(false);
    canPay[0] = true;
    const payMoney = new Array(X).fill(new Array(2).fill(0));
    ABn.sort();
    ABn.foreach((x, i) => {
        canPay[x[0]] = true;
        payMoney[x[0]][i] = 1;
    });
    for(let i=1; i<=X; i++){
        if(canPay[i]){

        } else {

        }
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainC('2 19\n2 3\n5 6');

