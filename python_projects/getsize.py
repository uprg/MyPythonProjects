import os
#print(os.path.getsize("D:\\phone\\How Database Cursors Help in Fetching Large Result sets from your SQL.mp4"))

for i in os.listdir("D:\\phone"):
    if os.path.getsize(f"D:\\phone\\{i}") == 0:
        os.remove(f"D:\\phone\\{i}")