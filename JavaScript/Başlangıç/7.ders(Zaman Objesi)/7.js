let value;

const now = Date()//şuanki tarihi yazdırır

const date1 = new  Date("9-19-1993 06:15:02")//şuanki tarihi yazdırır

const date2 = new Date("September 19 1993");

const date3 = new Date("9/19/1993");




value=now;
value=date1;
value=date1.getMonth();
value=date1.getDate();//eylul ayını kaçıncı günü olduğunu
value=date1.getDay();//Pazar gününü hangi giünedenk geldiğini 
value = date1.getHours();

date1.setMonth(7);
date1.setDate(8);
date1.setFullYear(1999,7,5)

value = date1;
console.log(value)