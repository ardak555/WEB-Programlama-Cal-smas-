//Elementi Id ye göre seçme

let element;
 
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Element classa göre seçme
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//Element Tag'a göre seçme
 element = document.getElementsByTagName("div");

//Query Sellector - CSS sellector

//tek element
element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");

//çok element
element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
})



console.log(element)