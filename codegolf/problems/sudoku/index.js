o=(x,y)=>4*x+76*y+40
e=[...arguments[0]]
print((s=k=>{x=k%9
y=~~(k/9)
let j=o(x,y)
if(k==81)return e
if(e[j]!=" ")return s(k+1)
let p={}
for(i=0;i<9;i++)[o(i,y),o(x,i),o(~~(x/3)*3+i%3,~~(y/3)*3+~~(i/3))].map(r=>p[e[r]]=1)
for(let i=1;i<=9;i++)if(!p[i]&&s(k+1,e[j]=i))return e
e[j]=" "})(0).join(""))
