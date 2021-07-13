def recursiveSum(arr: [int]):
    if len(arr) == 0:
        return 0
    else:
        return arr[0] + recursiveSum(arr[1:])


print(recursiveSum([1,2,3, 10]))
