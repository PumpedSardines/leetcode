l=23456790
a=/^1?2?3?4?5?6?7?8?9?$/
for(i=2;i<l;i++){a[i]||a.test(i)&&print(i)
for(j=i;j<l;j+=i)a[j]=1
}
