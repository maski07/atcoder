/**
 * 茶色問題
 * 解法：同じアナグラムがでてきたことを察知する
 * つまり、sortしてmapに詰めたら、あとはhasで保持しているかどうか確かめたらいい
 * 3つ以上の重複は、(A,B)(A,C)(B,C)になることに注意する
 */
'use strict'
const log = (...val) => console.log(...val);//デバッグ用
function Main(input){
    const sn = input.split('\n');
    const N = sn.shift();
    let answer = 0;
    let box = new Map();
    for(let i=0; i<sn.length; i++){
        const sortStr = sn[i].split('').sort().join('').trim();
        if(box.has(sortStr)){
            answer += box.get(sortStr);
            box.set(sortStr, box.get(sortStr)+1)
        } else{
            box.set(sortStr, 1);
        }
    }
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// Main('3\nacornistnt\npeanutbomb\nconstraint')
// Main('2\noneplustwo\nninemodsix')
Main('5\nabaaaaaaaa\noneplustwo\naaaaaaaaba\ntwoplusone\naaaabaaaaa')

// let box = new Map();
// const str = 'value';
// box.set(str,1)
// const str1 = 'value';
// box.set(str1,2)
// log(box.get(str))
