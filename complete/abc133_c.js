'use strict'
const log = console.log;
/**d
 * 解法:2019とL,Rの差が一番小さい値を選ぶと良い
 * わからん！
 */
function Main(input){
    const [L, R] = input.split(' ').map(Number);
    let minNum = new Map(2019, 2019);
    // LとRの間で一番小さい数字を選ぶ
    for(let i=L; i<=R; i++){
        if(Math.abs(2019-i) < minNum) minNum = Math.abs(2019-i);
        if(i % 2019 === 0){
            minNum = i;
            break;
        }
    }
    log({minNum});
    log((minNum*(minNum+1)) % 2019);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main('2020 2040')
// Main('4 5') 

