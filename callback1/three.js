let wish=(a,b)=>{

    return a+b


}
let Hello=(a,b)=>{

return a-b
 

}
let Aryan=(a,b,callback)=>{

 
    return callback(a,b)
}
let r1=Aryan(10,20,wish)
console.log(r1)
let r2=Aryan(10,20,Hello)
console.log(r2)