S = input()
T = input()
s, t = len(S), len(T)
L = []
for i in range(s-t+1):
  if all(S[i+j]==T[j] or S[i+j]=="?" for j in range(t)):
    L.append(S[:i]+T+S[i+t:])
L = [l.replace("?", "a") for l in L]
print(min(L) if len(L)>0 else "UNRESTORABLE")
