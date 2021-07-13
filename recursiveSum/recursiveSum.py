def recursiveSum(arr: [int]):
    if len(arr) == 0:
        return 0
    else:
        return arr[0] + recursiveSum(arr[1:])

def recursiveCount(arr: []):
    if len(arr) == 0:
        return 0
    else: 
        return 1 + recursiveCount(arr[1:])
print(recursiveSum([1,2,3, 10]))
print(recursiveCount(['a', 'b', 'c']))
