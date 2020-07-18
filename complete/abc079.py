def main():
    A = input()
    if(A[0] + A[1] + A[2] + A[3] == 7) return print(A[0] + "+" + A[1] + "+" + A[2] + "+" + A[3])
    if(A[0] + A[1] + A[2] - A[3] == 7) return print(A[0] + "+" + A[1] + "+" + A[2] + "-" + A[3])
    if(A[0] + A[1] - A[2] - A[3] == 7) return print(A[0] + "+" + A[1] + "-" + A[2] + "-" + A[3])
    if(A[0] - A[1] - A[2] - A[3] == 7) return print(A[0] + "-" + A[1] + "-" + A[2] + "-" + A[3])


main()
