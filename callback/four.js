let wish=(a,b,c)=>{
    
    return (a+b+c)
 
}
let Hello= (a,b,c)=>{

    return (a-b-c)

}
let Good=(a,b,c,callback)=>{


  
    return callback(a,b,c)



}
let r1= Good(10,200,400,wish)
console.log(r1)
let r2=Good(10,200,400,Hello )
console.log(r2)