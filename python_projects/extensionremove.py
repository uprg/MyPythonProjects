import os


for i in os.listdir("D:\\phone"):
    filename_withoutextension = i[:len(i)-4]
    print(filename_withoutextension)