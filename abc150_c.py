import itertools

N = []
[N.append(num) for num in range(1, int(input())+1)]
Pn = tuple(map(int, input().split()))
Qn = tuple(map(int, input().split()))

permutation = []
for x in itertools.permutations(N):
    permutation.append(x)

print(abs(permutation.index(Pn) - permutation.index(Qn)))

# import itertools
# N = int(input())
# P = tuple(map(int, input().split()))
# Q = tuple(map(int, input().split()))
 
# l = list(itertools.permutations(range(1,N+1), N))
# print(abs(l.index(P) - l.index(Q)))

