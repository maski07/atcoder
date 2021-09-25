/** メモ **/
'use strict'

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	const [S, T] = input.split(' ');
    let answer = 0;
    for(let a=0; a<=S; a++){
        for(let b=0; b<=S-a; b++){
            for(let c=0; c<=S-a-b; c++){
                if(a+b+c <= S
                    && a*b*c <= T){
                        answer++;
                    }
            }
        }
    }
    console.log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainB('1 0');
MainB('2 5');
MainB('10 10');
MainB('30 100');