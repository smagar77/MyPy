def vally(steps):
    steps_count = 0
    vally_count = 0
    for step in steps:
        prev_count = steps_count
        if step == 'U':
            steps_count +=1
        else:
            steps_count-=1
        if prev_count == 0 and steps_count < 0:
            vally_count+=1
    return vally_count

result = vally(['D','D','U','U', 'D','D','D','U','D','U', 'U', 'U','D', 'D', 'D', 'U', 'U', 'U'])
print(result)