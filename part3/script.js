let num1, num2, sum;
num1 = prompt('Введите первое число:');
num2 = prompt('Введите второе число:');
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
    sum = num1 + num2;
} else {
    sum = num2 - num1;
}
if (isNaN(sum)) {
    document.write('Вы указали значение неподходящего типа');
} else {
    document.write(sum);
}