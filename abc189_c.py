""" スニペット """
def get_int(): return int(input())
def get_ints(): return list(map(int, input().split()))

""" スニペット """


def start():
    N, X = get_ints()
    drank = 0

    for i in range(N):
        V, P = get_ints()
        drank: float += float(V) * float(P/100)
        print(drank)
        if(drank > X):
            return i+1
    return -1


print(start())
