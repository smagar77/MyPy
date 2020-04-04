def hourGlassSUM(arr2d):
    i=0
    sum = []
    while(i<len(arr2d)):
        for j in range(0, len(arr2d)):
            if i<(len(arr2d)-2) and j<(len(arr2d)-2):
                sum.append(arr2d[i][j]+arr2d[i][j+1]+arr2d[i][j+2]\
            +arr2d[i+1][j+1]+arr2d[i+2][j]+arr2d[i+2][j+1]+arr2d[i+2][j+2])
        i+=1
    print(max(sum))

result = hourGlassSUM(
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 7],
    ]
)