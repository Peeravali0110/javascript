class Account{
      
    min_bal=2000;
    acc_bal=0;
    deposit(){

       this.acc_bal=30000 
    }
    withdrawal(){

        this.acc_bal=this.acc_bal- this.min_bal
    }




}
let a1=new Account()
console.log(a1)
a1.deposit()
console.log(a1)
a1.withdrawal()
console.log(a1)