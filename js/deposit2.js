// Переделать фрагмент программы из задания 2, так чтобы в зависимости
// от переменной f вклад увеличивался либо от первоначальной суммы (f = 1), либо
// от уже накопленной (f=2). Если значение f указанно некорректно, сообщить об
// этом и расчет не производить.

var s0 = 10000;
var p = 12;
var sn = 15000;
var f, months;

do {
    f = prompt("Enter 1 or 2", 1);
    if (f != 1 && f != 2) {
        alert("Input value should be 1 or 2");    
    } else break;
} while (true);

if (f == 1) document.write("you need " + func1() + " months");
else document.write("you need " + func2() + " months");

function func1() {
    months = (sn-s0) / (s0 * p/(12*100));
    return months;
}

function func2() {
    for (var i = s0, months = 0; i < sn; months++) {
        i += i*p/(12*100);
    }
    return months;
}

// проверка по формуле https://ru.m.wikipedia.org/wiki/Сложные_проценты
// var verify = s0 * Math.pow(1 + p/100, 41/12);
// document.write(verify);



