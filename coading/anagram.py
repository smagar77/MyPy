def anagram(s1, s2):
    s1 = sorted(s1)
    s2 = sorted(s2)

    lock_idx = 0
    for i in range(0, len(s1)):
        if s2[i] and s1[i] != s2[i]:
            lock_idx = i
            break
    ttl1 = (len(s1))-lock_idx
    ttl2 = (len(s2))-lock_idx
    ttl = ttl1+ttl2
    print(ttl)
    new_s2 = []
    new_s1 = []
    for char in s1:
        if char not in s2:
            new_s2.append(char)
    for char in s2:
        if char not in s1:
            new_s1.append(char)
    total = len(new_s1)+len(new_s2)
    print(total)


anagram('abc', 'ad')