// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
let a = 0;
let b = 1;
let y = -3;

if (a > 0) {
    console.log(true);
} else{
    console.log(false);
};

if (b > 0) {
    console.log(true);
} else{
    console.log(false);
};

if (y > 0) {
    console.log(true);
} else{
    console.log(false);
};


console.log("=======");
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
let tst = "test";
let qwrt = "qwerty";
let wordTrue = true;
let one = true;

if (tst === "test") {
    console.log(true);
}

if (qwrt === "test") {
    console.log(true);
}

if (wordTrue === "test") {
    console.log(true);
}

if (one === 1) {
    console.log(true);
}

console.log("=======");

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
let x = 1;
let d = 10;
let c = 13;

if (x > 10) {
    console.log(x - 5);
} else {
    console.log(x + 5);
}

if (d > 10) {
    console.log(d - 5);
} else {
    console.log(d + 5);
}

if (c > 10) {
    console.log(c - 5);
} else {
    console.log(c + 5);
}

console.log("=======");
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

const number = prompt("Введіть цифру від 1 до 12");
let month;

switch (number) {
    case "1":
    month = "Січень";
    alert(`${number} - ${month}`);
    break;

    case "2":
    month = "Лютий";
    alert(`${number} - ${month}`);
    break;    

    case "3":
    month = "Березень";
    alert(`${number} - ${month}`);
    break;

    case "4":
    month = "Квітень";
    alert(`${number} - ${month}`);
    break;  
    
    case "5":
    month = "Травень";
    alert(`${number} - ${month}`);
    break;  
    
    case "6":
    month = "Червень";
    alert(`${number} - ${month}`);
    break;    

    case "7":
    month = "Липень";
    alert(`${number} - ${month}`);
    break; 
    
    case "8":
    month = "Серпень";
    alert(`${number} - ${month}`);
    break;  
    
    case "9":
    month = "Вересень";
    alert(`${number} - ${month}`);
    break;    

    case "10":
    month = "Жовтень";
    alert(`${number} - ${month}`);
    break;  
    
    case "11":
    month = "Листопад";
    alert(`${number} - ${month}`);
    break;  
    
    case "12":
    month = "Грудень";
    alert(`${number} - ${month}`);
    break; 
}       
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел



console.log("======")


let arr = [1, 2, 3, 4, 5];


let result = arr.reduce((sum, current) => sum + current, 0);
alert( result );
// let num = arr;

//  num = prompt("Введіть тризначне число");
// let red = arr((summ, item) => summ + item);
// if (num >= 100 && num <= 999) {
//     alert( red);
// } else {
//     alert(`Некорретне число. Введіть тризначне число ще раз!`);
// }
