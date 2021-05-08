""" スニペット """
def get_int(): return int(input())
def get_ints(): return list(map(int, input().split()))

""" スニペット """

st = input()

if(st[0] == st[1] and st[0] == st[2]):
    print('Won')
else:
    print('Lost')
