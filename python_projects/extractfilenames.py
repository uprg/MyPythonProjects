import os


listoffiles = []

ROOT_PATH = "D:\\phone"

for i in os.listdir(ROOT_PATH):
    if os.path.isdir(f"{ROOT_PATH}\\{i}") == False:
        filename_withoutextension = i[:len(i)-4]
        if filename_withoutextension not in listoffiles:
            listoffiles.append(filename_withoutextension)



#print(listoffiles)


with open("filenames.txt", "a", encoding="utf-8") as f:
    for i in listoffiles:
        f.write(f"{i}\n")


