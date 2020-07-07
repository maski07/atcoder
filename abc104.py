
D, G = map(int, input().split())
PD = []
for _ in range(D):
    PD.append(list(map(int, input().split())))

C=[PD[i][0]*(i+1)*100 for i in range(D)]
print(C)

def dfs(PD, i):

    return 1


# dfs(PD, 0)