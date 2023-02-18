from typing import List
import math

#  Gnome Sort
'''
1.左から比べて小さければ入れ替える
2.入れ替えたら一つ戻る
一度入れ替えた数値が適切な位置に行くまでもどる
'''


def merge_sort(numbers: List) -> List:
    def devide(numbers: List) -> List:
        len_numbers = len(numbers)
        devided_len = math.floor(len_numbers/2)

        pass
    pass


def answer(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    index = 0
    while index < len_numbers:
        if index == 0:
            index = index + 1
        if numbers[index] >= numbers[index - 1]:
            index = index + 1
        else:
            numbers[index], numbers[index -
                                    1] = numbers[index-1], numbers[index]
            index = index - 1
    return numbers


def gnome_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    index = 0
    while index < len_numbers - 1:
        if index == 0:
            index = index + 1
        if numbers[index] >= numbers[index - 1]:
            # if numbers[index] < numbers[index + 1]:
            numbers[index],
            numbers[index + 1] = numbers[index + 1], numbers[index]
            index -= 1
            print(numbers)
        else:
            index += 1

    return numbers


if __name__ == '__main__':
    import random
    nums = [random.randint(0, 1000) for _ in range(10)]
    print(answer(nums))
