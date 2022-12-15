class hello{
   

    method(){

        console.log("gm")
    }
}
class hi extends hello{

    method(){
        super.method()
        console.log("gn")
    }
}
new hi().method()