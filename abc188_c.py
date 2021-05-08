""" スニペット """
import math
def get(): return input()
def get_int(): return int(input())  # 数値取得
def get_ints(): return list(map(int, input().split()))  # 数列取得

""" スニペット """
"""
アルゴリズム
①リストを２つに分割する
②2つのリストで、それぞれ最大の数字で比べ、
小さい方のindex+1を出力する
"""
N = get_int()
An = get_ints()
center = math.floor((len(An)/2))
An1 = An[0:center]
An2 = An[center:len(An)]
secondMax = min(max(An1), max(An2))
print(An.index(secondMax)+1)
