let wish=(a,b,c,d)=>{

return(a+b+c+d)

}
let Rn=(a,b,c,d)=>{

    return (a-b-c-d)
  
}
let Ary=(a,b,c,d)=>{

    return (a*b*c*d)

}
let Gm=(a,b,c,d)=>{

    return (a/b/c/d)

}
let Azma=(a,b,c,d,callback)=>{
  

    return callback(a,b,c,d)

}
let r1=Azma(50,100,150,200,wish)
console.log(r1)
let r2=Azma(50,100,150,200,Rn)
console.log(r2)
let r3=Azma(50,100,150,200,Ary)
console.log(r3)
let r4=Azma(50,100,150,200,Gm)
console.log(r4)