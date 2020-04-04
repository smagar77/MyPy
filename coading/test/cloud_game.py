def cloudJumps(clouds):
    steps = []
    step_count = 0
    for i in range(0, len(clouds)):
        if clouds[i] == 0:
            if step_count == 0:
                if i < len(clouds)-1:
                    if clouds[i+1] == 0:
                        step_count += 1
                    else:
                        print(i)
                        steps.append(clouds[i])
                        step_count = 0
                else:
                    print(i)
                    steps.append(clouds[i])
                    step_count = 0
            elif step_count == 1:
                if i < len(clouds)-1:
                    if clouds[i+1] == 0 and clouds[i-1] == 0:
                        step_count += 1
                    else:
                        print(i)
                        steps.append(clouds[i])
                        step_count = 0
                else:
                    print(i)
                    steps.append(clouds[i])
                    step_count = 0
            elif step_count==2:
                print(i)
                steps.append(clouds[i])
                step_count = 0
        else:
            step_count += 1

    print(steps)
cloudJumps([0,0,1,0,0,1,0])