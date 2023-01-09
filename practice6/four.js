let data=[{"id":1,"first_name":"Maximilian","gender":"Male"},
{"id":2,"first_name":"Donovan","gender":"Male"},
{"id":3,"first_name":"Kip","gender":"Male"},
{"id":4,"first_name":"Margaretha","gender":"Female"},
{"id":5,"first_name":"Maurizio","gender":"Male"},
{"id":6,"first_name":"Hillyer","gender":"Male"},
{"id":7,"first_name":"Garey","gender":"Male"},
{"id":8,"first_name":"Wenona","gender":"Female"},
{"id":9,"first_name":"Carolee","gender":"Female"},
{"id":10,"first_name":"Patricia","gender":"Female"},
{"id":11,"first_name":"Marina","gender":"Female"},
{"id":12,"first_name":"Wilhelm","gender":"Male"},
{"id":13,"first_name":"Emmey","gender":"Female"},
{"id":14,"first_name":"Amara","gender":"Female"},
{"id":15,"first_name":"Lev","gender":"Male"},
{"id":16,"first_name":"Hermann","gender":"Male"},
{"id":17,"first_name":"Fey","gender":"Female"},
{"id":18,"first_name":"Edy","gender":"Agender"},
{"id":19,"first_name":"Franky","gender":"Female"},
{"id":20,"first_name":"Zeb","gender":"Male"},
{"id":21,"first_name":"Terza","gender":"Female"},
{"id":22,"first_name":"Caitrin","gender":"Female"},
{"id":23,"first_name":"Brittan","gender":"Female"},
{"id":24,"first_name":"Rube","gender":"Non-binary"},
{"id":25,"first_name":"Gabriel","gender":"Female"},
{"id":26,"first_name":"Gilburt","gender":"Male"},
{"id":27,"first_name":"Galvan","gender":"Male"},
{"id":28,"first_name":"Chariot","gender":"Male"},
{"id":29,"first_name":"Cathee","gender":"Female"},
{"id":30,"first_name":"Alwyn","gender":"Male"},
{"id":31,"first_name":"Mordecai","gender":"Male"},
{"id":32,"first_name":"Christen","gender":"Female"},
{"id":33,"first_name":"Kora","gender":"Female"},
{"id":34,"first_name":"Glenden","gender":"Male"},
{"id":35,"first_name":"Mona","gender":"Female"},
{"id":36,"first_name":"Neilla","gender":"Female"},
{"id":37,"first_name":"Kenon","gender":"Male"},
{"id":38,"first_name":"Chiquita","gender":"Female"},
{"id":39,"first_name":"Natalee","gender":"Female"},
{"id":40,"first_name":"Harman","gender":"Male"},
{"id":41,"first_name":"Marris","gender":"Female"},
{"id":42,"first_name":"Jessamine","gender":"Female"},
{"id":43,"first_name":"Hannie","gender":"Female"},
{"id":44,"first_name":"Ignaz","gender":"Male"},
{"id":45,"first_name":"Corri","gender":"Female"},
{"id":46,"first_name":"Laurianne","gender":"Female"},
{"id":47,"first_name":"Robert","gender":"Male"},
{"id":48,"first_name":"Mozes","gender":"Male"},
{"id":49,"first_name":"Hirsch","gender":"Male"},
{"id":50,"first_name":"Priscilla","gender":"Female"}]


console.log(data[1].first_name)
console.log(data[40].first_name)
console.log(data[49].id)

// using for loop

for(let i=0;i<=data.length-1;i=i+1){

    console.log(data[i].gender)
    console.log(data[i].id)
}