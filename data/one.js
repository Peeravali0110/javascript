let enames=[
    {id:101,name:"aryan",age:22,salary:450000},
    {id:102,name:"syed peera vali",age:23,salary:55000},
    {id:103,name:"shaik azma",age:10,salary:10000},
    {id:104,name:"shaikayyat",age:15,salary:50000}


]

function wish(){

rows=""
for(let i=0;i<=enames.length-1;i=i+1){

    rows=rows+`<tr>
       
    <td>${enames[i].id}</td>
    <td>${enames[i].name}</td>
    <td>${enames[i].age}</td>
    <td>${enames[i].salary}</td>


    </tr>`
}


    document.getElementById("abc").innerHTML=rows

}