""" スニペット """
def get_int(): return int(input())
def get_ints(): return list(map(int, input().split()))


""" スニペット """


"""

red
red
red
!orange
yellow
!blue
cyan
!green
brown
!gray

hash変数A：全部突っ込む
hash変数B：Aから「!」をすべて削除
Bの変数をひとつずつ取り出し、!あり、なしで両方存在すればsatisfiable
そうでなければ、それを出力して処理終了
log2N × log2n
"""
