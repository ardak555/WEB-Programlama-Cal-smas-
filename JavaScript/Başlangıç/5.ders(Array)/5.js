let value;

const number = [43,23,45,25,24,96,63,72,5]

//const number2 = new Array(1,2,3,4,5,6,7)

const langst = ["Python", "Java", "C++","JavaScript"];

const a =[ "Merhaba", 22, null , undefined, 3.14]

value = number.length;


//İndexteki değeri değiştirme

number[2]=1000;
value = number;



//index of
value = number.indexOf(1000);

//Arayin sonuna değer eklem
number.push(20);
number.unshift(1);//başına değer ekler
number.pop();//sonundan değer silme
number.shift();//başndan değer silme
number.splice(0,3);//0-3 arasını silme
number.reverse();//elemanları ters çevirir.
number.sort(function(x,y){
    //küçükten büyüğe
    return x-y;
    //büyükten küçüğe
    //return y-x;
});
value=number;
console.log(value);