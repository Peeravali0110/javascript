let data=[{"id":1,"name":"Genoveva","email":"valeso0@exblog.jp","gender":"Male","mobile":"1290973148"},
{"id":2,"name":"Macaw, scarlet","email":"sspilsburie1@washingtonpost.com","gender":"Male","mobile":"9427062169"},
{"id":3,"name":"Western bearded dragon","email":"lnoods2@washington.edu","gender":"Male","mobile":"9246243250"},
{"id":4,"name":"Black-throated cardinal","email":"icurphey3@ovh.net","gender":"Female","mobile":"3742468278"},
{"id":5,"name":"Phascogale, brush-tailed","email":"rwibrow4@uol.com.br","gender":"Male","mobile":"3684945056"},
{"id":6,"name":"Common seal","email":"kludovico5@mtv.com","gender":"Male","mobile":"6446702795"},
{"id":7,"name":"Vulture, oriental white-backed","email":"crusbridge6@geocities.com","gender":"Female","mobile":"5253649255"},
{"id":8,"name":"Parrot, hawk-headed","email":"disabell7@goodreads.com","gender":"Female","mobile":"3801213471"},
{"id":9,"name":"Creeper, black-tailed tree","email":"sproud8@vimeo.com","gender":"Male","mobile":"3832543872"},
{"id":10,"name":"Indian giant squirrel","email":"mandryunin9@theglobeandmail.com","gender":"Female","mobile":"0666436258"},
{"id":11,"name":"Snake, green vine","email":"ebywaya@ihg.com","gender":"Male","mobile":"4377291165"},
{"id":12,"name":"Anteater, australian spiny","email":"dcowleb@cafepress.com","gender":"Female","mobile":"9429624091"},
{"id":13,"name":"Asian water buffalo","email":"irussonc@t.co","gender":"Male","mobile":"3051304239"},
{"id":14,"name":"Butterfly (unidentified)","email":"wcocksedged@exblog.jp","gender":"Male","mobile":"0744662516"},
{"id":15,"name":"Albatross, waved","email":"eruttye@storify.com","gender":"Male","mobile":"3254244052"},
{"id":16,"name":"Rhea, common","email":"dchurchwardf@nyu.edu","gender":"Female","mobile":"2658634145"},
{"id":17,"name":"Euro wallaby","email":"lshovellerg@purevolume.com","gender":"Genderqueer","mobile":"5146578419"},
{"id":18,"name":"Quail, gambel's","email":"tozintsevh@cam.ac.uk","gender":"Female","mobile":"6646327955"},
{"id":19,"name":"Indian red admiral","email":"glebruni@answers.com","gender":"Male","mobile":"9778164037"},
{"id":20,"name":"Pintail, bahama","email":"cdelaharpej@e-recht24.de","gender":"Male","mobile":"2142300782"}]


function wish(){

    let rows=""
//using for loop
/*for(let i=0;i<=data.length-1;i=i+1){


    rows=rows+`<tr>
    
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].gender}</td>
    <td>${data[i].mobile}</td>
    
    
    
    
    
    
    
    
    </tr>`
}*/

//using while loop

let i=0;
while(i<=data.length-1){

    rows=rows+`<tr>
    
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].gender}</td>
    <td>${data[i].mobile}</td>
    
    
    
    
    
    </tr>`
    i=i+1
}


//using for of loop
/*for( aryan  of data)

rows=rows+
`<tr>

<td>${aryan.id}</td>
<td>${aryan.name}</td>
<td>${aryan.email}</td>
<td>${aryan.gender}</td>
<td>${aryan.mobile}</td>



</tr>`*/

 





    document.getElementById("abc").innerHTML=rows

}