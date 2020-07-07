function Main1(input){
    const S = input.split("\n")[0];
    const dfs = (t, i) => {
        if(i==S.length-1)
            return t.split("+").map(Number).reduce((a,b) => Number(a)+Number(b));
        return  dfs(t+S[i+1], i+1) + dfs(t+"+"+S[i+1], i+1);
    }
    return console.log(dfs(S[0],0));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main("125\n")
// Main("9999999999\n")

function Main2(input){
    const A = input.split('').map(Number);
    if(A[0] + A[1] + A[2] + A[3] == 7) return console.log(A[0] + "+" + A[1] + "+" + A[2] + "+" + A[3] + "=7");
    if(A[0] + A[1] + A[2] - A[3] == 7) return console.log(A[0] + "+" + A[1] + "+" + A[2] + "-" + A[3] + "=7");
    if(A[0] + A[1] - A[2] - A[3] == 7) return console.log(A[0] + "+" + A[1] + "-" + A[2] + "-" + A[3] + "=7");
    if(A[0] - A[1] - A[2] - A[3] == 7) return console.log(A[0] + "-" + A[1] + "-" + A[2] + "-" + A[3] + "=7");
    if(A[0] - A[1] - A[2] + A[3] == 7) return console.log(A[0] + "-" + A[1] + "-" + A[2] + "+" + A[3] + "=7");
    if(A[0] - A[1] + A[2] + A[3] == 7) return console.log(A[0] + "-" + A[1] + "+" + A[2] + "+" + A[3] + "=7");

    return console.log(A[0] + A[1] + A[2] + A[3])
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main("1222")
// Main("0290")
// Main("3242")
