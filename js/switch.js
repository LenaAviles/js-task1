// 1) Переделать фрагмент программы из оператора switch в условный
// оператор
// switch (s) {
//  case "+":
//  y = y + x;
//  break;
//  case "-":
//  y = y - x;
//  break;
//  case "*":
//  y = y * x;
//  break;
//  case "/":
//  y = y / x;
//  break;
//  case 'Abs':
//  case 'abs':
//  case "ABS":
//  y = Math.abs(y);
//  break;
//  case 'Mod':
//  case 'MOD':
//  y = y % x;
//  default:
//  y = x;
// }
// Проверить корректность выполнения программы используя debugger.

var x = 2;
var y = 3;

var s = prompt("Enter s", "");
if(s === "+") {
    y = y + x;
} else if(s === "-") {
    y = y - x;
} else if(s === "*") {
    y = y * x;
} else if(s.toUpperCase() === "ABS") {
    y = Math.abs(y);
} else if(s.toUpperCase() === "MOD") {
    y = y % x;
} else y = x;

document.write('y = '+y);