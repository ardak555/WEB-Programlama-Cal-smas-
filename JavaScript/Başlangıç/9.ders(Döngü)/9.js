//forEach Kullanımı
const langs  = new Array("A","B","C")

 langs.forEach(function(lang){

   console.log(lang);
    
   })
    
    //map özelliği
    
    const user = [
    
    {name:"Arda", yas:"21"},
    
    {name:"Ahmet", yas:"25"},
    
    {name:"Ali", yas:"20"}
    
    ];
    
    const names = user.map(function(user){
    
    
    return user.name;
    
    });

    console.log(names);

    const kullanıcı ={
      name:"Arda",
      age:21
    };

    for(let key in kullanıcı){
      console.log(key,kullanıcı[key]);
    }