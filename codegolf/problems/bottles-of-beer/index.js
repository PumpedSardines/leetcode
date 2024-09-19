for(j=(i,n="n")=>`${i||n+"o more"} bottle${i-1?"s":""}`,u=" of beer",a=u+" on the wall",i=99;i+1;i--)print(j(i,"N")+a+`, ${j(i)+u}.
${i?"Take one down and pass it around":"Go to the store and buy some more"}, ${j(i-1<0?99:i-1)+a}.
`)
