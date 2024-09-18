o=(x,y)=>Number(4n*x+76n*y+40n)
e=[...arguments[0]]
s=(k)=>{
let x=k%9n
let y=k/9n
if(k==81n)return 1
if(e[o(x, y)]!=" ")return s(k + 1n)
let p={}
for(i=0n;i<9n;i++){
p[e[o(i,y)]]=1
p[e[o(x,i)]]=1
p[e[o(x/3n+i%3n,y/3n+i/3n)]]=1
}for(let i=1;i<=9;i++)if(!p[""+i]&&s(k+1n,e[o(x,y)]=i))return 1
e[o(x, y)] = " "
}
s(0n)
print(e.join(""))
