class Aryan{


constructor(){
   

}
}
class Syed extends Aryan{

constructor(id,name,sal){
    super(id,name,sal)
    console.log(id)
    this.accc=id
    console.log(id)
    

}

}
new Syed(101,"aryan",600000)