function merhaba(name){
   console.log(` Günaydın ${name}`) 
}
merhaba("Arda");

//Function Expression
const hello =function(name){
    console.log("Merhaba"+ name)
}
hello("Arda");

//Immediately Invoked Expression (IIFE)

(function(name){
    console.log(` Günaydın ${name}`);
})("Arda");

//
 const database ={
    host: "localhost",
    add: function(){
        console.log("elde  edildi");
    },
    update: function(id){
        console.log(`Id: ${id} güncellendi`)
    },
    delete: function(id){
        console.log(`Id: ${id} silindi`)
    }
 }

 console.log(database.host)
 database.add();
 database.delete(10);