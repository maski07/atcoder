"""
abc167_c 茶色問題

組み合わせ
A 1 2 3
B 2 3 4 
C 3 4 5 
D 3 3 5
・パターン
全ての参考書に対して、買った、買わなかったの合計金額とSkillを算出する
"""
# スニペット
# def ismap() -> map(int, input().split()):
import copy
def GFS(Anm, sumX, X):
    # 全てのSkillがXを超えていれば合計金額を返却
    beyondXFlag = True
    for x,i in enumerate(sumX):
        if x <= X:
            beyondXFlag = False 
    if beyondXFlag:
        return sumX[0]
    if Anm == []: # 次の要素がないなら-1
        return -1
    # 次の要素を取得
    A = Anm.pop(0)
    # 購入した場合の合計Skillを算出
    newSumX = copy.deepcopy(sumX) 
    print(newSumX, A)
    for i,x in enumerate(A):
        newSumX[i] += x
    # out of range??
    # max(買う場合GFS,買わない場合DFS)
    return min(GFS(Anm,newSumX,X), GFS(Anm,sumX,X))
# 入力値の取得
N,M,X = map(int, input().split())
Anm = []
[Anm.append(list(map(int, input().split()))) for i in range(N)]        

#  GFSの結果を出力
print(GFS(Anm,[0]*len(Anm[0]),X))
