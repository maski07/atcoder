/** メモ **/
'use strict'

/**  */
var log = console.log;
function MainC(input){

    let count = input.length;
    for(let i=0; i<input.length-1; i++) {
        const a = Number(input[i]);
        const b = Number(input[i+1]);
        count += (10 + a - b) % 10;
    }
    log(count + Number(input[input.length - 1]));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC("21");
MainC("407");
MainC("2025524202552420255242025524");