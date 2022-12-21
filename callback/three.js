let wish=(a,b)=>{
    return (a+b)
}
let Hi=(a,b)=>{
   
    return (a*b)
}
let Hello=(a,b,callback)=>{


    return callback(a,b)

}
let r1=Hello(10,20,wish)
console.log(r1)
let r2=Hello(10,20,Hi)
console.log(r2)