class TwoSum:

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # val : index

        for index, num in enumerate(nums):
            difference = target - num
            if difference in prevMap:
                return [prevMap[difference], index]
            prevMap[num] = index
