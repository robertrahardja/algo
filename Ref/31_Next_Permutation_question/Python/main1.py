from arr import arr
print(arr)

length = len(arr)
if length <= 2:
    print( arr.reverse())
pointer = length - 2
        
while pointer >= 0 and arr[pointer] >= arr[pointer + 1]:
    pointer -= 1
        
if pointer == -1:
    print(arr.reverse())
        
for x in range(length - 1, pointer, -1):
    if arr[pointer] < arr[x]:
        arr[pointer], arr[x] = arr[x], arr[pointer]
        break
        
arr[pointer + 1:] = reversed(arr[pointer + 1:])


print(arr)
