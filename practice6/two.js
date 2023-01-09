let name=["aryan","azma","ayyat","peera"]

console.log(name[1])

// using while loop

let i=0;
while(i<=name.length-1){

 
    console.log(name[i])
    i=i+1;
}

console.log(name.length)
console.log(name[name.length-1])


//using for of loop


for (   rn  of name){

    console.log(rn)
}