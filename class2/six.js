class Bank{
     
    min_bal=500;
    acc_bal=0;
    deposit_bal(amount){
      this.acc_bal=this.acc_bal+amount

    }

    get_statement(){
    
         return this.acc_bal-this.min_bal

    }




}
let a1=new Bank()
let a2=new Bank()
let a3=new Bank()
console.log(a1)
a1.deposit_bal(5000)
console.log(a1)
a2.deposit_bal(10000)
console.log(a2)
a3.deposit_bal(2000)
console.log(a3)


//get final balance
let r1=a1.get_statement()
console.log(r1)
let r2=a2.get_statement()
console.log(r2)
let r3=a3.get_statement()
console.log(r3)
