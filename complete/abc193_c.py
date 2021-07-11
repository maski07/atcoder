N = int(input())
sq = int(N ** 0.5)
s = set()
# 8に対して 3*3
for a in range(2, sq + 1):
    x = a * a
    print(a)
    while x <= N:
        # print(x)
        # a^bで表せるやつを入れてく
        s.add(x)
        x *= a
# print(N - len(s))
