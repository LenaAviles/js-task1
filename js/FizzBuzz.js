// Напишите программу, которая выводит на экран числа от 1 до 100. При этом
// вместо чисел, кратных трем, программа должна выводить слово Fizz, а вместо
// чисел, кратных пяти - слово Buzz. Если число кратно пятнадцати, то программа
// должна выводить слово FizzBuzz. Программу реализовать с помощью трех видов
// циклов.

var max = 100;
var output;
document.write("<br>For loop<br>");
for (var i = 1; i <=100; i++) {
    output = "";
    i % 3 == 0 && (output = "Fizz"); 
    i % 5 == 0 && (output += "Buzz");
    output = output || i;
    
    document.write(i + " = " + output+", ");
}

document.write("<br><br>While loop<br>");

i = 1;
while (i <=100) {
    output = "";
    if( i % 3 == 0 ) output = "Fizz"; 
    if( i % 5 == 0 ) output += "Buzz";
    output = output || i;
    
    document.write(i + " = " + output+", ");
    i++;
}

document.write("<br><br>Do-while loop<br>");

i = 1;
do {
    output = "";
    if( i % 3 == 0 ) output = "Fizz"; 
    if( i % 5 == 0 ) output += "Buzz";
    output = output || i;
    
    document.write(i + " = " + output+", ");
    i++;
} while (i <= 100);