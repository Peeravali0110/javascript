class Bank{
   min_bal=500;
   acc_bal=0;
   
   get_amount(money){

  this.acc_bal=this.acc_bal+money

   }




}
let a1=new Bank()
let a2=new Bank()
console.log(a1)
a1.get_amount(2000)
console.log(a1)
a2.get_amount(10000)
console.log(a2)