/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	const [X1, X2, X3, X4] = input.split('').map(Number);
    if(Math.max.apply(null, [X1, X2, X3, X4])
        === Math.min.apply(null, [X1, X2, X3, X4])) {
            return console.log('Weak');
    }
    const isWeak 
        = (num1, num2) => num1 === 9 
        ? 0 === num2
        : (num1 + 1) === num2;

    if(isWeak(X1, X2)
        && isWeak(X2, X3)
        && isWeak(X3, X4)) {
            return console.log('Weak');
        }
    return console.log('Strong');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());

/**
 * 暗証番号の桁数変化に対応
 */
function isStrongOrWeak(input){
	const secretNumbers = input.split('').map(Number);
    const Strength = {
        Weak: 'Weak',
        Strong: 'Strong'
    }
    // 同じ数は弱い
    const areAllSame 
        = (arr) =>
        Math.max.apply(null, arr) === Math.min.apply(null, arr);
    if(areAllSame(secretNumbers)) {
        return console.log(Strength.Weak);
    }
    // 連番も弱い
    const areConsecutive = (arr) => {
        for(let i=0; i<arr.length-1; i++) {
            // 9 → 0に注意
            if((arr[i] + 1) % 10 !== arr[i+1]){
                return true;
            }
        }    
    }
    return console.log(
        areConsecutive(secretNumbers) 
        ? Strength.Strong
        : Strength.Weak);
}
// isStrongOrWeak(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// isStrongOrWeak('7777');
// isStrongOrWeak('0112');
// isStrongOrWeak('9012');