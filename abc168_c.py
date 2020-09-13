"""
abc168_c (茶色問題)
予言定理を利用
    長針^2 + 短針^2 + 2*長針*短針* cos(θ * π/180)
    ※ hhはminによって9時の時針より少し動くので注意する
"""
from math import (pi,cos,sqrt,radians)

def main():
    A,B,H,M = map(int, input().split())

    # 長針、短針の0時0分からの角度を求める
    HTheta = H/12 * 360 + 1/12 * (M/60) *  360
    MTheta = M/60 * 360
    # |長針-短針|で角度θを求める
    Theta = abs(HTheta - MTheta) 
    # θ=180ならA+Bを出力して終了
    if Theta == 180:
        print(A + B)
        return
    # 予言定理を求める
    print(sqrt(A*A + B*B - 2*A*B*cos(radians(Theta))))

main()