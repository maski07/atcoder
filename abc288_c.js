/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
// UnionFind Tree
// 先に進もうとしている箇所がすでに通ったポイントならanswer++
function MainC(input) {
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const ABm = arr.map(x => x.split(' ').map(Number));
    ABm.sort((a, b) => {
        const min_a = Math.min.apply(null, a);
        const min_b = Math.min.apply(null, b);
        if(min_a !== min_b) { // 第1ソートキー
            return min_a - min_b;
        } else { // 第2ソートキー
            return Math.max.apply(null, a) - Math.max.apply(null, b);
        }
    });
    log(ABm);
    const alreadyPassed = new Set();
    let answer = 0;
    for(let i=0; i<M; i++) {
        const [front, back] = ABm[i];
        // log(front, back);
        if(alreadyPassed.has(front) && alreadyPassed.has(back)){
            answer++;
        }
        alreadyPassed.add(front);
        alreadyPassed.add(back);
    }
    log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// MainC('6 7\n1 2\n1 3\n2 3\n4 2\n6 5\n4 6\n4 5');
// MainC('4 2\n1 2\n3 4');
// MainC('5 3\n1 2\n1 3\n2 3');
// MainC('6 5\n1 2\n2 5\n3 6\n5 6\n3 4');
// MainC('6 9\n1 2\n2 1\n1 5\n2 3\n1 4\n4 5\n5 6\n2 5\n6 3');
// MainC('5 5\n1 2\n2 3\n3 4\n4 5\n1 5');
// MainC('6 8\n1 2\n2 3\n3 4\n4 1\n4 5\n5 6\n6 4\n1 6');
// MainC('4 4\n1 2\n2 3\n3 4\n4 1');

// 1---2---3---4
//     |   |
//     5---6


var log = console.log;
class UnionFind {
    constructor(n){
        this.par = new Array(n);
        this.rank = new Array(n);
        for(let i=0; i<n; i++){
            this.par[i] = i;
            this.rank[i] = i;
        }
    }
    find(x){
        if(this.par[x] === x){
            return x;
        } else{
            return this.par[x] = this.find(this.par[x]);
        }
    }
    unite(x,y){
        x = this.find(x);
        y = this.find(y);
        if(x===y) return;
        if(this.rank[x] < this.rank[y]){
            this.par[x] = y;
        } else {
            this.par[y] = x;
            if(this.rank[x] === this.rank[y]) this.rank[x]++;
        }
    }
    same(x,y){
        return this.find(x) == this.find(y);
    }
}
function MainC2(input) {
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const ABm = arr.map(x => x.split(' ').map(Number));
    const unionFind = new UnionFind(N);
    let answer = 0;
    for(let i=0; i<M; i++){
        const [front, back] = ABm[i];
        // log({uni: unionFind.same(front, back), front, back, par:[...unionFind.par]})
        if(unionFind.same(front, back)){
            answer++;
        }
        unionFind.unite(front, back);
    }
    log(answer);
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC2('6 7\n1 2\n1 3\n2 3\n4 2\n6 5\n4 6\n4 5');
MainC2('4 2\n1 2\n3 4');
MainC2('5 3\n1 2\n1 3\n2 3');
