// let counter = 0;
// counter ++ // increment, сколько раз мы позовем его, столько раз и увеличит , но только на единицу
// console.log(counter);





// let counter = 0;
// counter -- // decrement сколько раз мы позовем его, столько раз и уменьшит , но только на единицу
// console.log(counter);






// let counter = 0;
// console.log(++counter);





// let counter = 0;
// console.log(counter++);










// 'Задачи'



// let names = [
//     'Jack',
//     'Helen',
//     'Peter'
// ];

// if (names[0] === 'Helen') {
//     console.log('We found Helen!');
// } else if (names[1] === 'Helen') {
//     console.log('We found Helen!');
// }else if (names[2] === 'Helen') {
//     console.log('We found Helen!');
// } else {
//     console.log('Helen not found')
// }







// "Перепишем это в тернальный оператор"

// let names = [
//     'Jack',
//     'Helen',
//     'Peter'
// ];

// names[0] === 'Helen' ||
// names[1] === 'Helen' ||
// names[2] === 'Helen' ?
// console.log('We found Helen!'):
// console.log('Helen not found');







// "Цикл"

// let names = [
//         'Jack',
//         'Helen',
//         'Peter'
//     ];

// for (let i = 0; 1 < names.length; i++) {
//     if (names[i] === 'Helen') {
//         console.log('We found Helen!');
//     } ;
// };



// "Задание 2"

// "Есть ключевые слова которые помогают управлять циклом"
// " continium & break"





// 'break'


// let arr = [1, 2, 3, 0, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) break;
//     console.log(`Num is ${arr[i]}`);
// }








// 'continium '


// let arr = [1, 2, 3, 0, 5, 6];
// for(let i = 0; i < arr.length; i ++) {
//     if (arr[i] % 2 === 0) continue;
//     console.log(`Число нечетное число ${arr[i]}`);
// }







// "Есть 2 вида циклов"
// for...in & for...of




// "for...in" - плдходит для обьектов и для массивов и перебирает ключи, а по ним значения


// for (variable in obj) {
//     ... code ...
// }




// '1'

// let obj = {
//     title: 'Sumsung',
//     price: 500,
//     count: 12,
//     insStock: false
// };

// for (i in obj) {
//     console.log(i);
//     console.log(obj[i]);
// }



// '2'

// let obj = {
//     title: 'Sumsung',
//     price: 500,
//     count: 12,
//     insStock: false
// };

// for (key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }



// '3'

// let obj = {
//     title: 'Sumsung',
//     price: 500,
//     count: 12,
//     insStock: false
// };

// let arr = [null, 'hello', 10, false];
// for (i in arr) {
//     console.log(i);
// }




// '4'

// let obj = {
//     title: 'Sumsung',
//     price: 500,
//     count: 12,
//     insStock: false
// };

// let arr = [null, 'hello', 10, false];
// for (i in arr) {
//     console.log(arr[i]);
// }



// 'for...of' - способен перибирать только итерируемые обьекты

// let obj = { // выдает ошибку , тк не итерируемый обьект
//     title: 'Sumsung',
//     price: 500,
// };
// let arr = ['title', true, 23, null];
// for (i of obj) {
//     console.log(i);
// }






// задача 1

// даны 2 массива, один пустой , во втором хранятся строки, необходимо перебрать массив со строками циклом и добавить в пустой массив только те строки, у которых длина больше или равга 5ти символам, распечатать результат



// let arr1 = [];
// let arr2 = [
//     'Jack',
//     'Jessica',
//     'Hel\'ga',
//     'Bob',
//     'Alexander',
//     'John'
// ];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].length >= 5) {
//         arr1.push(arr2[i]);
//     };
// };
// console.log(arr1);





// задача 2

// дан массив чисел, проверить является ли число четным, если да то заменить число на true, в противном случае на false, если ноль , то заменить на строку 'zero' (на этом примере показать вложенные тернарные операторы) 


// let arr = [
//     12,
//     45,
//     89,
//     4,
//     5,
//     10,
//     3,
//     0
// ];

// // [true, false, false ... 'zero']

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] % 2 === 0 ? 
//     arr[i] === 0 ? arr.splice(i, 1, 'zero') : 
//     arr.splice(i, 1, true) : 
//     arr.splice(i, 1, false);
// };
// // условие ? что делать если верно : что делать если неверно

// console.log(arr);






// задача 3

// дан массив с обьектами , каждый обьект это описание некого товара, необходимо перебрать массив и проверить если товара на складе больше 10 штук, и цена на него больше или равна 500, изменить значение ключа sale с нуля на 10, затем вывести alert с сообщения на такой-то товар лбьявлена акция, скидка 10%, использовать циклы for ... in и for ... of


// const goods = [
//     {
//         title: 'Samsung Galaxy s20 Ultra',
//         price: 800,
//         count: 11,
//         sale: 0
//     },
//     {
//         title: 'iPhone 13 Pro',
//         price: 1100,
//         count: 5,
//         sale: 0
//     },
//     {
//         title: 'Xiaomi Redmi Note 10',
//         price: 400,
//         count: 10,
//         sale: 0
//     },
//     {
//         title: 'Apple MacBook Air',
//         price: 1000,
//         count: 15,
//         sale: 0
//     },
//     {
//         title: 'Asus ROG',
//         price: 1500,
//         count: 4,
//         sale: 0
//     }
// ];

// for (i of goods) {
//     // console.log(i);
//     if (i.price >= 500 && i.count > 10) i.
//     sale = 10;
// };


// // console.log(goods);


// for (i in goods) {
//     if (goods[i].sale !== 0) alert(`На товар ${goods[i].title} объявлена скидка в ${goods[i].sale}%!`);
// };