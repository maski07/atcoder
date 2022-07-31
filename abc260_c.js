/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
    const [N ,X, Y] = input.split(' ').map(Number);
	let blue = {level: Number.MAX_VALUE, count: 0};
	let red = {level: N, count: 1};
    const changeRed = () => {
        if(red.level === 1) return;
        blue.count += Math.max(red.count,1) * X;
        blue.level = red.level;
        red.level -= 1;
        log('red', blue, red);
    }
    const changeBlue = () => {
        if(blue.level === 1) return;
        if(blue.level === Number.MAX_VALUE){
            blue.level =1;
            return;
        }
        red.count += 1;
        blue.level -= 1;
        blue.count = Y * Math.max(blue.count, 1);
        log('blue', blue, red);
    }
    while(blue.level !== 1){
        changeRed();
        changeBlue();
    }
    log(blue.count);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('2 3 4');
MainC('1 5 5');
MainC('10 5 5');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
