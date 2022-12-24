let enames=[{id:101,name:"Aryan",sal:450000},{id:102,name:"syed peeravali",sal:550000}]

let create_employee=(emp,callback)=>{
 
setTimeout(()=>{

   (enames.push(emp))
   callback()

},[4000])

}
let get_employee=()=>{
let rows=""
setTimeout(()=>{

for(  emp of enames){

rows=rows+`<tr>


<td>${emp.id}</td>
<td>${emp.name}</td>
<td>${emp.sal}</td>
</tr>`
}
document.getElementById("abc").innerHTML=rows
},[1000])



}
create_employee({id:103,name:"Azma",sal:650000},get_employee)
