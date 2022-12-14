class Aryan{
   
    get_name(){

        console.log("good morning")
    }
    date(){

        console.log("good afternoon")
    }
    constructor(){
        console.log("hi hello")
    }
}
class Syed extends Aryan{
    get_name(){
    super.get_name()

        console.log("ARYAN")
    }
    date(){
        super.date()

        console.log("SYED")
    }
    constructor(){
        super()
        console.log("good night")
    }

}
new Syed().get_name()
new Syed().date()
