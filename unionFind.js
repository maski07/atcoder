'use strict'
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
function Use(n){
    return new UnionFind(n);
}

function Main(){
    let unionFind = new UnionFind(10);
    console.log(unionFind.rank, unionFind.par);
    unionFind.unite(5,3)
    console.log('-----------')
    console.log(unionFind.rank, unionFind.par);
}

Main();
