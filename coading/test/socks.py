def getPairs(socks):
    hash = {}
    matching_pairs = 0
    for clr in socks:
        if clr in hash:
            hash[clr] += 1
            if hash[clr] == 2:
                matching_pairs+=1
                hash[clr] = 0
        else:
            hash[clr] = 1
    print(matching_pairs)

getPairs([10, 20, 20, 10, 10, 50, 50, 10, 20])