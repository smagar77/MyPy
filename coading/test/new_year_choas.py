arr = [2, 3, 4, 1, 5]
# cnt = {}
# for i in range(0, len(arr)-1):
#     if arr[i] > arr[i+1]:
#         cnt[arr[i]] = cnt[arr[i]]+1 if arr[i] in cnt.keys() else 1
#         tmp = arr[i]
#         arr[i] = arr[i+1]
#         arr[i+1] = tmp
#     print(arr)
# print(cnt)

i = 0
min = 0
sorted_arr = []
while(i < len(arr)):
    for j in range(i, len(arr)):
        if arr[j] < arr[i]:
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
    i+=1
print(arr)
