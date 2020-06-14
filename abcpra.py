

def main():
        inp = input()
        arr = inp.trim().split('\n')[1].split()
        count = 1
        for i in arr:
            count *= int(i) 
        print(count)


main()

# 2\n1000000000 1000000000