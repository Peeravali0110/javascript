class Bank{

min_bal=500;
acc_bal=0;
deposit_bal(amount){

    this.acc_bal=this.acc_bal+amount


}
get_bal(money){
 
this.min_bal=this.min_bal+money

}



}
let a1=new Bank()
let a2=new Bank()
console.log(a1)
console.log(a2)
a2.deposit_bal(10000)
console.log(a2)
a1.get_bal(5000)
console.log(a1)
console.log(a2)