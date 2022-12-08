let employees=[{id:55,name:"syed peera vali",salary:450000,age:23},
{id:55,name:"syed peera vali",salary:450000,age:23},
{id:55,name:"syed peera vali",salary:450000,age:23},
{id:55,name:"syed peera vali",salary:450000,age:23},
{id:55,name:"syed peera vali",salary:450000,age:23},
{id:55,name:"syed peera vali",salary:450000,age:23},
]


function hello(){
let rows=""

/*for(   aryan of  employees)

rows=rows+
`<tr>

<td>${aryan.id}</td>
<td>${aryan.name}</td>
<td>${aryan.salary}</td>
<td>${aryan.age}</td>


</tr>`*/


for(let i=0;i<=employees.length-1;i=i+1){


    rows=rows+
    `<tr>
    
    <td>${employees[i].id}</td>
    
    
    
    </tr>`
}

    document.getElementById("abc").innerHTML=rows
}





