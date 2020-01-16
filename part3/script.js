const num1 = Number(prompt('Введите первое число:'));
const num2 = Number(prompt('Введите второе число:'));

if (isNaN(num1) || isNaN(num2)) {
    document.write('Вы указали значение неподходящего типа');
} else {
    document.write((num1 > num2 ? num1 + num2 : num2 - num1).toString());
}
