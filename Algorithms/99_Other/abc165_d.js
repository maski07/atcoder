const log = (...val) => console.log(...val);
function MainD(input){
    const [A, B, N] = input.split(' ');
    const x = Math.min(B-1, N);
    const answer = Math.floor((A * x)/B) - A *  Math.floor(x/B);
    console.log(answer);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('5 7 4');
MainD('11 10 9');

/**
 * このサイトの解説がわかりやすい
 * https://drken1215.hatenablog.com/entry/2020/05/02/225600
 * 
 */