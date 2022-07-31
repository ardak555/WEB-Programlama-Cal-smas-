let value;

const programmer ={
    name : "Arda Koyuncu",
    age: 25,
    email: "cfhefhefjeke@gmail.com",
    langs: ["Python", "Java", "JavaScript"],
    adress: {
        city: "Trabzon",
        street:"Of"
    },

    work: function(){
        console.log("Progrmacı Çalışıyor....");
    }
}

value= programmer;

value = programmer.email;
//value = programmer["email"];

value = programmer.langs;

value = programmer.adress.city;

programmer.work();
console.log(value);

//Object Littrel
const programmers = [
    {name: "Arda",age:21},
    {name:"Oğuz",age:25}
];

value = programmers[0];
console.log(value);