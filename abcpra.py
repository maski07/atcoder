import math

def main():
    A,B,H,M = map(int,input().split(' '))
    # 30: 12h/360° 6:  60min/360°
    theta = abs((30 * H + 0.5 * M )- 6 * M)
    if(theta > 180):
        theta -= 180
    elif(theta == 180):
        print(A + B)
        return
    print(math.sqrt(A**2 + B**2 - 2 * A * B * math.cos(math.radians(theta))))

main()