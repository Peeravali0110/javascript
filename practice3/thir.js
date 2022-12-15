class hello{
    
    constructor(){

        console.log("good morning")
    }

}
class wish extends hello {


constructor(){
    super()

    console.log("good night")
}

}
new wish()
