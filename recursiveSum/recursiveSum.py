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


def recursiveMax(arr: [int]):
    if len(arr) == 2: 
        return arr[0] if (arr[0] > arr[1]) else arr[1]
    else :
        firstValue = recursiveMax(arr[:2])
        secondValue = recursiveMax(arr[2:])
        return firstValue if firstValue > secondValue else secondValue

        
        
print(recursiveSum([1,2,3, 10]))
print(recursiveCount(['a', 'b', 'c']))
print(recursiveMax([11,2,3, 10]))
