f = open("scripts/20k.txt", "r")
l=f.readlines()
l2=l[0]
f = ''.join(l2)
thing='"'
listf=[]

words=f.split(",")
f1=open("scripts/20knew.txt", "w")
for i in range (0,len(words)):
    f1.write(thing+words[i]+thing+",")


