/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const XY = arr.map(a => a.split(' ').map(Number));
    const ascXxy = XY.sort((a, b) => a[0]-b[0]);
    const ascYxy = XY.sort((a, b) => a[1]-b[1]);
    const minX = ascXxy[0];
    const maxX = ascXxy[N-1];
    const minY = ascYxy[0];
    const maxY = ascYxy[N-1];
    const getLineLength = (xy1, xy2) => {
        return Math.sqrt(Math.pow(xy1[0] -  xy2[0], 2) 
                        + Math.pow(xy1[1] -  xy2[1], 2));
    }
    const getResult = (arr, max) => {
        log(arr, max);
        if(arr.length <= 1) return max;
        for(let i=1; i<arr.length; i++){
            if(arr[0] === arr[i]) return;
            max = Math.max(getLineLength(arr[0], arr[i]), max);
        }
        arr.shift();
        return getResult(arr, max);
    }
    log(getResult([minX, maxX, minY, maxY], 0));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainB('3\n0 0\n0 1\n1 1');
MainB('3\n0 2\n0 1\n1 1');
// MainB('5\n315 271\n-2 -621\n-205 -511\n-952 482\n165 463');

/**  */
var log = console.log;
function MainC(input) {
    const K = BigInt(input);
    const binary = K.toString(2);
    console.log(binary.replace(/1/g, '2'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('3');
// MainC('11');
// MainC('923423423420220108');
