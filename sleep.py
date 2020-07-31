
N = int(input())

arr = [input().split() for _ in range(N)]
result = [arr[i][4] for i in range(N)]
circleNum = 0
for i in range(N):
    if result[i] == '○':
        circleNum += 1

print(str(arr[0][0]) + '月の結果：',str(circleNum) + '/' + str(N),'早起き率：' + str(circleNum/N))



