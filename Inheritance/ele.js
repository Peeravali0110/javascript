class Aryan{
    wish(){
    
        console.log("good morning")
    }
}
class hello extends Aryan{
    
    wish(){
        super.wish()
        

  
    console.log("hello hi good afternoon")
    }
}
new hello().wish()