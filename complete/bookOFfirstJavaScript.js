/**
 * 初めてのJavaScript
 */
const bruce = {名前 : "ブルース"}

function update(bir,occ){
    this.生年  = bir;
    this.職業 = occ;
}
console.log(bruce);
update.call(bruce, 1949,'歌手');
console.log(bruce);
const arr = [2,3,-5,15,7];
console.log(Math.min(...arr));
const f = (function(){
    let count = 0;
    return function(){
        return `この関数が呼ばれた回数：${++count}回`;
    }
})();

console.log(f());
console.log(f());
console.log(f());

const arr = [1,17,16,5,4,16,10,3,49];
console.log(arr.find((x, i) => i<2 && Number.isInteger(Math.sprt(x))));

/** 10章 Map と Set */
const u1 ={name: '和洋'};
const u2 ={name: '花子'};
const u3 ={name: '涼子'};
const u4 ={name: '哲人'};
const userRoles = new Map();
userRoles.set(u1,'管理者');
userRoles.set(u2,'ユーザ');
userRoles.set(u3,'管理者');

for(let u  of userRoles.keys())
    console.log(u.name);
for(let u  of userRoles.values())
    console.log(u);
let i = 0
console.log(userRoles);
for(let ur of userRoles.entries()){
    console.log(i++);
    console.log(ur);
    console.log(`${ur[0].name}: ${ur[1]}`);
}
for(let[u, r] of userRoles.entries())
    console.log(`${u}: ${r}`);
console.log(userRoles.values());
console.log(...userRoles.values());

userRoles.delete(u2);
console.log(userRoles.values());
const x = {
    test: "hoge"
};
let y = `x is ${x}`;
console.log(y);

/** 12章 */
class Fibonaccisequence{
    [Symbol.iterator](){
        let a = 0, b = 1;
        return{
            next(){
                let rval  = {value: b, done: false};//これを定義した時点でbの値が入る ※ bの値を参照し続けているわけではない
                b += a;
                a = rval.value;
                return rval; //ここも定義した時点のものを返す
            }
        }
    }
} 
const fib = new Fibonaccisequence();
let i = 0;
for(let n of fib){
    console.log(`${i+1}: ${n}`);
    if(++i > 10) break;
}

// ES6から日本語を関数に利用できるようになった
function ファンクション(){
    console.log('ファンクション');
}
ファンクション();

// 13章
for(let i=5; i>=0; i--){
    setTimeout(function(){
        console.log(i===0 ? "go!" : i);
    }, (5-i) * 1000);
}

function sum(arr, f){
    arr.push(5)
    return  arr.reduce((a, x) => a += f(x),0);
}

console.log(sum([1,2,3],x=> x*x));
// // 再帰処理
function findNeedle(haystack){
    if(haystack.length == 0) return "藁山はなくなった"
    if(haystack.shift() === '針') return "針が見つかった"
    console.log(haystack);
    return findNeedle(haystack);
}
console.log(findNeedle(['藁','藁','藁','藁','針','藁','藁']));
// 無限ループの場合
function findNeedleByWhile(haystack){
    while(true){
        if(haystack.length == 0) return "藁山はなくなった"
        if(haystack.shift() === '針') return "針が見つかった"
        console.log(haystack);
    }
    return "エラー発生";
}
console.log(findNeedleByWhile(['藁','藁','藁','藁','針','藁','藁']));
