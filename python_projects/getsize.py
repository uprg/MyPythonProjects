import os

for i in os.listdir("D:\\phone"):
    if os.path.getsize(f"D:\\phone\\{i}") == 0:
        os.remove(f"D:\\phone\\{i}")
