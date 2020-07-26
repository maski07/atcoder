"""
累積和の問題
解説：
    ACACTACG → 8文字
    配列を作る：[0, 1, 1, 2, 2, 2, 3, 3, 3] → 9個の要素
        ACが出てきた数を計算する
        Aの右隣がCであればたす。一個めは0文字目なので0になる


"""
N, Q = map(int, input().split())
S = input()
t = [0] * (N + 1) # 配列の初期化
for i in range(N):
    t[i + 1] = t[i] + (1 if S[i : i + 2] == 'AC' else 0)
    print(t)
for i in range(Q):
    l, r = map(int, input().split())
    print(t[r-1] - t[l-1])
