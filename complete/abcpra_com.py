import math
"""
abc168 C問題 なんか間違ってる
"""
def main168():
    A,B,H,M = map(int,input().split(' '))
    # 30: 12h/360° 6:  60min/360°
    theta = abs((30 * H + 0.5 * M )- 6 * M)
    if(theta > 180):
        theta -= 180
    elif(theta == 180):
        print(A + B)
        return
    print(math.sqrt(A**2 + B**2 - 2 * A * B * math.cos(math.radians(theta))))
 
"""
abc162問題
"""
def main162():
    N, M = map(int,input().split())
    k = [input().split() for _ in range(M)]
    p = input().split()

    print(N, M)
    print(k)
    print(p)
    return

"""
abc085_C問題 (全探索)

"""
def main085():
    N, Y = map(int,input().split())
    bill = [10000, 5000, 1000]
    for num_10000 in range(N+1):# Nが3なら[0,1,2]なので+1する
        for num_5000 in range(N-num_10000+1):
            if Y == bill[0] * num_10000 + bill[1] * num_5000 + bill[2] * (N-num_10000-num_5000):
                print(' '.join([str(num_10000),str(num_5000),str(N-num_10000-num_5000)]))
                return

    print('-1 -1 -1')

    return 

"""
abc065_C問題 (全探索)
"""
def main1():
    S = input().split()
    answer = 0
    for num in range(len(S)-1):
        answer += solve(S, num)
    print(answer)
    return 

def solve(S, plusNum):
    total = 0
    for num in range(1, len(S-1)):
        newS = S.insert(num,"+")
        total = sum(map(int, newS.split("+")))
    
    return total


s = input()
l = len(s)

def a(t,i):
    if i==l-1: # 深さ 最大は「文字数-1」
        return sum(map(int,t.split("+")))
    return a(t+s[i+1],i+1)+a(t+"+"+s[i+1],i+1)
    # return (後ろに繋ぐだけ) + (+を増やしていく) 
print(a(s[0],0))

# 125 の場合
"""
a(1,0)    -> a(12,1)    + a(1+2, 1)
a(12,1)   -> a(125,2)   + a(1+2+5,2)
a(1+2, 1) -> a(1+25, 2) + a(1+2+5, 2)
"""



