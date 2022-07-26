


// "Тема : Стрелочная функция"







// "Одна функция 3 способами"


// function add(num1, num2) {
//     return num1 + num2;
// };
// console.log(add(10, 15));


// let add = function(num1, num2) {
//     return num1 + num2;
// };
// console.log(add(10, 15));


// (params) => {};







// "Пример"


// let add = (num1, num2) => num1 + num2; // "Тут после стрелочки автоматически стоит ретерн, однако если мы еще с чем-то работаем, то нужно ставить. Снизу пример этого"
// console.log(add(10, 15));


// let add = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(add(10, 15));


// let getType = (elem, elem2) => typeof elem;
// console.log(getType(23));


// "Пример 2"

// let args = (x, y) => console.log(x, y);
// args(10, true, 'hello');


// let args = (x, y) => {
//     console.log(x, y);
//     console.log([...arguments]);
// };
// args(10, true, 'hello', null);






// "Задача 1"

// const converter = (km) => {
//     let meters = km * 1000;
//     return meters;
// };
// console.log(converter(1.8));

// "Теперь все это в одн строку"

// let converter = km => km * 1000;
// console.log(converter(2.1));



// "Задача 2"

// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
// const filteredArr = numbers1 => {
//     let filtered = [];
//     for (i of numbers1) {
//         if(i > 70) {
//             filtered.push(i);
//         };
//     };
//     return filtered;
// };
// console.log(filteredArr(numbers));






// "Тема : Методы обьектов" / Object methods


// let airplane = {
//     type: 'Boeing 787',
//     isActive: true,
//     isService: 865,
//     fly: function(city) {
//         console.log (`Летит в ${city}`);
//     }
// };
// airplane.fly('Mardrid');

// "Тоже самое другим способом"

// let airplane = {
//     type: 'Boeing 787',
//     isActive: true,
//     isService: 865,
//     fly(city)  {
//         console.log(`Летит в ${city}`);
//     }
// };
// airplane.fly('Mardrid');






// "Подтема : this"

// console.log(this);


let cat = {
    name: 'Barsic',
    type: 'Cat',
    color: 'White',
    sayName: function() {
        console.log(cat.name); //так делать не стоит,тк обьект может быть переименован, а this очень пластичный
        // console.log(this.name);
    }
};
cat.sayName();