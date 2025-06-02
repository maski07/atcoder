/** メモ **/
'use strict'
/**  */
var log = console.log;
function Main(arr, d) {
    const output = [];
    const n = arr.length;
    const start = d % n;

    for (let i = 0; i < n; i++) {
        const index = (start + i) % n;
        output.push(arr[index]);
    }

    console.log(output);
}

Main([1,6,7,8], 3);
Main([1, 2, 3, 4, 5, 6, 7], 8);
