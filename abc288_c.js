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
    constructor() {
      this.pair = [];
      this.size = [];
      this.group;
    }
    init(n) {
      for (let i = 1; i <= n; i++) this.pair[i] = -1;
      for (let i = 1; i <= n; i++) this.size[i] = 1;
      this.group = n;
    }
    root(x) {
      while (true) {
        if (this.pair[x] == -1) break;
        x = this.pair[x];
      }
      return x;
    }
    unite(u, v) {
      let rootU = this.root(u);
      let rootV = this.root(v);
      if (rootU == rootV) return;
      this.group--;
      if (this.size[rootU] < this.size[rootV]) {
        this.pair[rootU] = rootV;
        this.size[rootV] = this.size[rootU] + this.size[rootV];
      } else {
        this.pair[rootV] = rootU;
        this.size[rootU] = this.size[rootU] + this.size[rootV];
      }
    }
    same(u, v) {
      return this.root(u) === this.root(v);
    }
    getGroupCount() {
      return this.group;
    }
  }
function MainC2(input) {
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const ABm = arr.map(x => x.split(' ').map(Number));
    let unionFind = new UnionFind();
    unionFind.init(N);
    let answer = 0;
    for(let i=0; i<M; i++){
        const [front, back] = ABm[i];
        // log({uni: unionFind.same(front, back), front, back, par:[...unionFind.par]})
        if(unionFind.same(front, back)){
            answer++;
        } else {
            unionFind.unite(front, back);
        }
    }
    log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC2('6 7\n1 2\n1 3\n2 3\n4 2\n6 5\n4 6\n4 5');
MainC2('4 2\n1 2\n3 4');
MainC2('5 3\n1 2\n1 3\n2 3');
