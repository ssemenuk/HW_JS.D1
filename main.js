// Завдання 1
let userEnteredName = prompt("Введіть своє ім'я:");
alert("Привіт, " + userEnteredName + "!");

// Завдання 2
const currentYearTask2 = 2024;
let userBirthYearTask2 = prompt("Введіть рік вашого народження:");
let userAgeTask2 = currentYearTask2 - parseInt(userBirthYearTask2);
alert("Вам " + userAgeTask2 + " років.");

// Завдання 3
let squareSideLengthTask3 = prompt("Введіть довжину сторони квадрата:");
let squarePerimeterTask3 = 4 * parseFloat(squareSideLengthTask3);
alert("Периметр квадрата дорівнює " + squarePerimeterTask3);

// Завдання 4
let circleRadiusTask4 = prompt("Введіть радіус кола:");
let circleAreaTask4 = Math.PI * Math.pow(parseFloat(circleRadiusTask4), 2);
alert("Площа кола дорівнює " + circleAreaTask4);

// Завдання 5
let distanceBetweenCitiesTask5 = prompt("Введіть відстань між містами в кілометрах:");
let timeToTravelTask5 = prompt("За скільки годин ви хочете дістатися?");
let requiredSpeedTask5 = parseFloat(distanceBetweenCitiesTask5) / parseFloat(timeToTravelTask5);
alert("Щоб встигнути вчасно, вам потрібно рухатися зі швидкістю " + requiredSpeedTask5 + " км/год.");


// Завдання 8
let walletAmountTask8 = prompt("Введіть суму грошей у гаманці:");
let chocolateBarPriceTask8 = prompt("Введіть вартість однієї шоколадки:");
let chocolatesBoughtTask8 = Math.floor(walletAmountTask8 / chocolateBarPriceTask8);
let remainingMoneyTask8 = walletAmountTask8 % chocolateBarPriceTask8;

alert("Ви можете купити " + chocolatesBoughtTask8 + " шоколадок. Здача: " + remainingMoneyTask8 + " грн.");

// Завдання 9
let threeDigitNumberTask9 = prompt("Введіть тризначне число:");
let reversedNumberTask9 = parseInt(threeDigitNumberTask9.toString().split('').reverse().join(''));
alert("Паліндром числа " + threeDigitNumberTask9 + " - це " + reversedNumberTask9);

// Завдання 10
let userNumberTask10 = prompt("Введіть ціле число:");
let parityResultTask10 = (userNumberTask10 % 2 === 0) ? "парне" : "непарне";
alert("Введене число є " + parityResultTask10 + ".");