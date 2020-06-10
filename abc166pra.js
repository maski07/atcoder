"use strict"
/**
 * B - Trick or Treat
 */
 function Main(input){
    const arr = input.split('\n');
    const NK = arr[0].split(' ').map(Number);
    const N = NK[0];
    const K = NK[1];
    let count = 0;
    let haveRefArr = [];
    let haveRef = new Set([]);
    if(K==0||N==0) console.log(count);
    console.log(N,K)
    // 重複を削除して、お菓子を持っているすぬけ君を集める
    for(let i=2; i<=K*2+1; i+=2){
      // console.log(arr[i]);
      // console.log(arr[i])
      Array.prototype.push.apply(haveRefArr, arr[i].split(' ').map(Number));
    }
    haveRef.add(...haveRefArr);
    // お菓子を持っていないすぬけ君を探索
    for(let i=1; i<=N; i++){
      //  console.log(i)
       if(!haveRef.has(i)) count++;
    }
    console.log("haveRef：")
    console.log(haveRef)
    console.log(count);
 }
//  Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('3 2\n2\n1 3\n1\n3');
//Main('3 3\n1\n3\n1\n3\n1\n3');
// Main('3 2\n1\n3 2\n1\n3');



