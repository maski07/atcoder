"""
abc177_c 灰色上位問題
初見で解けなかった
    NextAction: N^2通りは四角形を考える。
                算出を因数分解してみる
・アルゴリズム
a b c 
a*b + a*c + b*c 
    N^2通りは四角形を考える。
    a   b   c
  a a*a a*b a*c
  b b*a b*b b*c
  c c*a c*b c*c
"△"を求める
  "△"*2 + "\" = "□"
  ("□" - "\")/2 =  △
・modの方法で求める必要がある
    b * a + c * (a+b) = ab + ca + cb
    → 累積和
    オーバフローを加味すると途中でmodをとった方が良い。pythonは大丈夫だけど。
"""
N = map(int, input())
An = list(map(int, input().split()))
mnum = 10 ** 9 + 7
CumSum = An[0] % mnum
answer = 0
for i in range(1, len(An)):
    answer = (answer + CumSum * An[i]) % mnum
    CumSum = (CumSum + An[i]) % mnum
print(answer)