A1, A2, A3, A4 =  map(int, input().split())

arr = [0] * 5
arr[A1] += 1
arr[A2] += 1
arr[A3] += 1
arr[A4] += 1

ans = list(map(lambda x: round(x / 2), arr))

print(sum(ans))
