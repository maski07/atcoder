"use strict"
/**
 * Shif Only
 * 学び
 * ・mapの中で割れる回数を求めてしまうところがうまい
 * ・Math関数に配列で渡さないといけないところをappllyを利用するのがうまい
 */
function Main(input){
  const numStds = input.split("\n")[1].split(' ');
 
  const divNum = numStds.map( number => {
    let count = 0;
    let k = parseInt(number);
    
    // ここで割れるだけ割って
    while(k % 2 === 0){
      k = k / 2;
      count++;
    }
    // 割れた回数を返却する
    return count;
  });
  console.log(divNum);
  // math.minはカンマ区切りなので、applyで配列を渡せるようにする
  const maxOpe = Math.min.apply(null,divNum);
  
  console.log(maxOpe);
}
// Main("3\n8 8 16");
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 5問
// 総ざらい方式だった。。
function Main5(input) {
  var input = input.split('\n');
  var input = input.map((n) => parseInt(n, 10));
  var count = 0;
  for(var i = 0; i <= input[0]; i++) {
    for(var j = 0; j <= input[1]; j++) {
      for(var k = 0; k <= input[2]; k++) {
        if(i * 500 + j * 100 + k * 50 === input[3]) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
// 6問
/* 学び
** ・whileとMath.floorの部分がうまい
** ・最初のparseIntも綺麗で良い
*/
function Main6(input) {
  var args = input.split(' ');
  var N = parseInt(args[0], 10);
  var A = parseInt(args[1], 10);
  var B = parseInt(args[2], 10);

  var  result = 0;
  for (var i = 1; i < N + 1; i++) {
    var sum = 0;
    var num = i;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10); // 整数で返却する関数 (10で割って少数を切り捨て)
    }
    if (sum >= A && sum <= B) {
      result += i;
    } 
  }

  console.log(result);
}


/**
 * 9問 Otoshidama
 * 学び
 * ・合計数があるので、10000と5000の枚数が決まれば、1000も決まる
 *   なので、forループが2つですむ
 * ・何がもとまれば、答えが出るのかについて最初に考えると良さそう
 */
const Main9 = (input) => {
  const tmp = input.trim().split(' ')
  const N = parseInt(tmp[0])
  const Y = parseInt(tmp[1])

  let result = '-1 -1 -1'

  for (let a = 0; a <= N; a++) {
    for (let b = 0; b <= N; b++) {
      if (a + b <= N) {
        const c = N - a - b
        if (
          (a * 10000) + (b * 5000) + (c * 1000) === Y &&
          (a + b + c) === N
        ) {
          result = [a, b, c].join(' ')
          break
        }
      }
    }
  }

  console.log(result)
  return result
}

/**
 * 10問 白昼夢
 * ・正規表現！？？これはすごい。思いつかんかった。
 */
function Main10(input) {
  const lines = input.trim().split("\n");
  const S = lines[0];

  const pattern = /^(dream|dreamer|erase|eraser)+$/;
  const res = pattern.test(S);
  
  console.log(res ? 'YES' : 'NO');
}
Main10('dreamerasereraseerase');

