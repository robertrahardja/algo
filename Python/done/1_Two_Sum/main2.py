def main(nums, target):
    map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in map:
            return [map[complement], i]
        map[num] = i

    return []


nums = [2, 7, 11, 15]
target = 9
result = main(nums, target)
print(result)
