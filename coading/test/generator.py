def myGen(fp):
    while True:
        yield line = fp.readline()

# with open('data.txt', 'w+') as fp:
#     for i in range(10):
#         fp.write(f'This is a test file#{i}\n')

with open('data.txt', 'r') as fp:
    lines = myGen(fp)