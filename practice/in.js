class wish{

   method(){
    console.log("good morning")
   }

}
class hello extends wish{
    method(){
        super.method()
        
        console.log(5555555)
    }
}
new  hello().method()
