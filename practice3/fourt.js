class Aryan{
   

    method(){

        console.log("hi hello")
    }

}
class Syed extends Aryan{
method(){

    super.method()

    console.log("good morning")
}


}
new Syed().method()