let emp={

    id:1293891,
    name:"aryan",
    age:23,
    condition:true,
    location:["newdelhi","bombay","hyderabad","banglore","kolkatta"],
    frnds:["azma","ayyat","syed","hello"]
}

console.log(emp.id)
console.log(emp.name)
console.log(emp.age)
console.log(emp.condition)
/*console.log(emp.location[0])
console.log(emp.location[1])
console.log(emp.location[2])
console.log(emp.location[4])
console.log(emp.frnds[0])

for(let i=0;i<=emp.location.length-1;i=i+1){

    console.log(emp.location[i])
}
for(i=0;i<=emp.frnds.length-1;i=i+1){

    console.log(emp.frnds[i])
}*/


//using while loop

let i=0;
while(i<=emp.frnds.length-1){

    console.log(emp.frnds[i])
    i=i+1
}

















