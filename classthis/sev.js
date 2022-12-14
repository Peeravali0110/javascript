class hello{
   min=200;
   acc=300;
   get_bal(){
     
    this.acc=3000
   }
   withdraw(){
     
    return this.acc-this.min
    

   }

}
let a1=new hello()
console.log(a1)
a1.get_bal()
console.log(a1)
let r1= a1.withdraw()
console.log(r1)