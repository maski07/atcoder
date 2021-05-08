/** メモ **/
var log = console.log;
function MainB(input){
	const [HWXY, ...tmp] = input.split('\n');
    const [H, W, X, Y] = HWXY.split(' ').map(Number);
    const Sh = tmp.map(a => a.split(''));
    // 配列の要素番号との差異をなくす
    const [vertical, side, Hver, Wside] = [X-1, Y-1, H-1, W-1];
    let answer = 0;
    // vertical(上)
    for(let i=vertical; i>= 0 && Sh[i][side] =='.'; i--) answer++;
    // side(右)
    for(let i=side; i<= Wside && Sh[vertical][i] =='.'; i++) answer++;
    // vertical(下)
    for(let i=vertical; i<= Hver && Sh[i][side] =='.'; i++) answer++;
    // side(左)
    for(let i=side; i>= 0 && Sh[vertical][i] =='.'; i--) answer++;
    log(answer - 3); // (X,Y)のポイントを3回重複してるから差し引く
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainB('4 4 2 2\n##..\n...#\n#.#.\n.#.#');
MainB('3 5 1 4\n#....\n#####\n....#');
MainB('5 5 4 2\n.#..#\n#.###\n##...\n#..#.\n#.###');
