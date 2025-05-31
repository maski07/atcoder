from typing import List

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        a = nums[-k:]
        b = nums[:k+1:]
        print(a, b)
        nums[:] = a + b

# nums = [1,2,3,4,5,6,7]
# k = 3
nums = [-1,-100,3,99]
k=2
Solution().rotate(nums, k)
print(nums)
