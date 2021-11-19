var num1 = 1234;
var num2 = 1000000;
var num3 = 9876543210;
var num4 = 6;
var num5 = -10;
var num6 = -5678;

num1 = num1.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

num2 = num2.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

num3 = num3.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
num4 = num4.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

num5 = num5.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
num6 = num6.toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
