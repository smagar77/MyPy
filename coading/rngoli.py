def rngoli(num):
    max_chars = (num*2)-1
    hypns = max_chars-1
    totals = max_chars+hypns
    center = totals//2
    limit = center//2
    i = limit*(-1)
    while (i <= limit):
        j = limit*(-1)
        while(j <= limit):
            if i < 0:
                if j < 0:
                    char_ = 97 - (i+j)
                elif j > 0:
                    char_ = 97 - (i-j)
                else:
                    char_ = 97-i
            elif i > 0:
                if j < 0:
                    char_ = 97 + (i - j)
                elif j > 0:
                    char_ = 97 + (i + j)
                else:
                    char_ = 97+i
            else:
                if j < 0:
                    char_ = 97 - j
                elif j > 0:
                    char_ = 97 + j
                else:
                    char_ = 97
            if char_ <= (96+num):
                print(f'{chr(char_)}', end='') if j == limit else print(f'{chr(char_)}-', end='')
            else:
                print('-', end='') if j== limit else print('--', end='')
            j+=1
        print('\n')
        i += 1

rngoli(8)
print('\n')