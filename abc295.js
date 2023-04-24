/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
    const words = input.split('\n')[1].split(' ');
    const englishes = ['and', 'not', 'that', 'the', 'you'];
    console.log(words.some(x => englishes.includes(x)) ? 'Yes' : 'No');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('10\nin that case you should print yes and not no');
// MainA('10\nin diesem fall sollten sie no und nicht yes ausgeben');
console.log(
    require("fs").readFileSync("/dev/stdin", "utf8")
    .split('\n')[1].split(' ')
    .some(x => ['and', 'not', 'that', 'the', 'you']
    .includes(x))
    ? 'Yes'
    : 'No');

/**  */
var log = console.log;
function MainB(input){
	const arr = input.split('\n');
    const [R, C] = arr.shift().split(' ').map(Number);
    const Brc = arr.map(a => a.split(''));
    const out = Array.from(new Array(R), _ => new Array(C));
    // log(Brc);
    for(let r = 0; r < R; r++){
        for(let c = 0; c < C; c++){
            // log(out);
            const now = Brc[r][c];
            if(now === '.'){
                out[r][c] = now;
            } else if(now === '#'){
                out[r][c] = out[r][c] === '.' ? out[r][c] : '#';
            } else {
                out[r][c] = '.';
                const power = Number(now);
                const already = new Set();
                const exploded = (origin_r, origin_c, now_r, now_c, power) => {
                    if(now_r < 0  || now_c < 0
                        || now_r >= R || now_c >= C
                        || already.has(now_r + '-' + now_c)){
                            return;
                        }
                    const distance = Math.abs(origin_r - now_r)  + Math.abs(origin_c - now_c);
                    // log({distance, power, now_r, now_c});
                    if(distance <= power) {
                        out[now_r][now_c] = '.';
                        already.add(now_r + '-' + now_c);
                        exploded(origin_r, origin_c, now_r + 1, now_c + 1, power);
                        exploded(origin_r, origin_c, now_r - 1, now_c - 1, power);
                        exploded(origin_r, origin_c, now_r - 1, now_c + 1, power);
                        exploded(origin_r, origin_c, now_r + 1, now_c - 1, power);

                        exploded(origin_r, origin_c, now_r + 1, now_c, power);
                        exploded(origin_r, origin_c, now_r, now_c + 1, power);
                        exploded(origin_r, origin_c, now_r - 1, now_c, power);
                        exploded(origin_r, origin_c, now_r, now_c - 1, power);
                    }
                    return;
                };            
                exploded(r, c, r, c, power);
            }
        }
    }
    log(out.map(a => a.join('')).join('\n'));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('4 4\n.1.#\n###.\n.#2.\n#.##');
// MainB('2 5\n..#.#\n###.#');
// MainB('2 3\n11#\n###');
// MainB('4 6\n#.#3#.\n###.#.\n##.###\n#1..#.');

/**  */
var log = console.log;
function MainC(input){
	const arr = input.split('\n');
    const N = Number(arr.shift());
    const An = arr.shift().split(' ').map(Number);
    An.sort();
    let previous = -1;
    let ans = 0;
    for(let i=0; i<N; i++) {
        if(previous === An[i]){
            ans++;
            previous = -1;
        } else {
            previous = An[i];
        }
    }
    log(ans);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('6\n4 1 7 4 1 4');
// MainC('1\n158260522');
// MainC('10\n295 2 29 295 29 2 29 295 2 29');

var log = console.log;
function MainD(input){
    const numbers = input.split('').map(Number);
    const counts = new Array(10).fill(0);
    for(let i = 0; i < numbers.length; i++){
        const num = numbers[0];
        counts[num]++;
        if(i % 2 === 0) {

        }
    }
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('20230322');