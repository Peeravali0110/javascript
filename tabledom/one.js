let emp=[{

    id:101,names:"syedpeeravali",salary:45000},
    {id:102,names:"aryan", salary:55000},
    {id:103,names:"syed", salary:65000}
]


function employee(){

    let rows=""
    for(i=0;i<=emp.length-1;i=i+1){

        rows=rows+`<tr>
        
        <td>${emp[i].id}</td>
        <td>${emp[i].names}</td>
        <td>${emp[i].salary}</td>
        
        
        </tr>`
    }

    document.getElementById("abc").innerHTML=rows
}