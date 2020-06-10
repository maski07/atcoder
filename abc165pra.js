"use strict"

function Main(input){
    let money = 100;
    const targetMoney =  input;

    for (let i = 0; i < targetMoney; i++) {
        if (money >= targetMoney) {
            console.log(i);
            i = targetMoney;
        }
        money = Math.floor(money * 1.01);
    }
}
//  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(103);
Main(1000000000000000000);
Main(1333333333);
