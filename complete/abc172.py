N, M, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
a, b = [0], [0]
# 読んだ時間量の和を作成する
for i in range(N):
    a.append(a[i] + A[i])
for i in range(M):
    b.append(b[i] + B[i])

ans, j = 0, M
for i in range(N + 1):
    if a[i] > K:
        break
    while b[j] > K - a[i]:
        j -= 1
        ans = max(ans, i + j)
print(ans)