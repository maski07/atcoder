"""
AtCoder 茶色問題
abc173_d
    貪欲法
初見で解けなかった
    ソートして足していくところまでは理解できていた
    NextAction: 
        プログラムの前にアルゴリズムを考える
        円形の問題は線として考える
        数列のような規則性がないかを探す
"""
N = int(input())
An = list(map(int, input().split()))
An.sort(reverse=True)
answer = 0
t = N-1
for i, Ai in enumerate(An):
    lim = 2
    if i==0:
        lim = 1
    for j in range(lim):
        if t > 0:
            answer += Ai
        t -= 1
print(answer)

