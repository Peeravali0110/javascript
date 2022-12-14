class Parent{
    id=101;
    wish(){
        console.log("hi")
    }
}
class Child extends Parent{
       name="xyz"
}
new Child().wish()
let a=new Child()
console.log(a)
