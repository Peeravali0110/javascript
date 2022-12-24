let employee=[{id:101,name:"aryan",sal:65000},
        {id:102,name:"syedpeeravali",sal:50000}]

let wish=(emp,callback)=>{
   setTimeout(()=>{
  employee.push(emp)

  callback()
  console.log(employee.length)
  
   },[2000])


}

let Hello=()=>{

  setTimeout(()=>{
   
    let rows=""
   for(  employee of employee){
      
     rows=rows+`<tr>
     
     
     <td>${employee.id}</td>
     <td>${employee.name}</td>
     <td>${employee.sal}</td>

     
     
     
     </tr>`
   }

   document.getElementById("abc").innerHTML=rows
   
    
    
  },[1000])

}
wish({id:103,name:"azma",sal:750000},Hello)


