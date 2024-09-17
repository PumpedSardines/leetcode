h="  "
l="\n -"
d=""
for(i=0;i<16;i++){
h+=i>5?"":" "+(i+2)
l+=i>5?"":"--"
j=i.toString(16).toUpperCase()
d+=j+":"
for(k=2;k<8;k++)d+=i*9+k-142?" "+String.fromCharCode("0x"+k+j):" "
d+=i>14?"DEL":"\n"
}print(h+l+"\n"+d)
