""" スニペット """
def get_int():
	return int(input())
def get_ints():
	return list(map(int, input().split()))
""" スニペット """
import math
inp = int(input())

seconds = math.floor(inp % 60)
minutes = math.floor((inp / 60) % 60)
hours = math.floor((inp / (60 * 60)) % 60)

# print(hours,minutes, seconds)
print(str(hours) + ':' + str(minutes) + ':' + str(seconds))
