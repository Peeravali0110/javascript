class Hello{

    m1(){

        console.log("good morning")

    }


}
class Hi extends Hello{

m1(){
    super.m1("hello")

    console.log("good night")
}

}
new Hi(10).m1()