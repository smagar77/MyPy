def trimSticks(sticks):
    length = len(sticks)
    i = 0
    while(i < length):
        count = 0
        sticks = [element for element in sticks if element > 0]
        if(any(sticks)):
            min_ele = min(sticks)
            for j in range(0, len(sticks)):
                if sticks[j] >= min_ele:
                    sticks[j]-=min_ele
                    count+=1
            print(f"min element is: {min_ele}")
            print(f"number of sticks cut is:{count}")
            i+=1
        else:
            break

trimSticks([5, 4, 4, 2, 2, 8])