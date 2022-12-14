class Aryan{
    id=101;
    wish(){

        console.log("good morning")
    }
}
class Peera extends Aryan{
     
    salary=200000
    wish(){
        console.log("good afternoon")
    }
}
let a=new Peera()
console.log(a)
a.wish()
