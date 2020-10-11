""" スニペット """
def get_int():
	return int(input())
def get_ints():
	return list(map(int, input().split()))
""" スニペット """
"""
ソートしてansのリストに値を詰め込む
値を詰め込む時に、すでに数値が入っていてそれが詰め込む値と違えば-1
全て突っ込んだら、それを出力。値がなければ、0を出力
頭が0なら-1 (ゼロフラグで確認)
"""
N, M = get_ints()
SiCi = [get_ints() for _ in range(M)]
ans = [0] * N

# ansを作成
for SC in SiCi:
	# print(SC, ans[SC[0]])
	if ans[SC[0]] == 0:
		ans[SC[0]] = SC[1] 
	elif ans[SC[0]] != SC[1]:
		print(-1)
		exit()
print(ans)
if int(ans[0]) == 0:
	print(-1)
# ansを出力
answer = ""
for i in ans:
	answer += ans[i]
print(answer)

		


