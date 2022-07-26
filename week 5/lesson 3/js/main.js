// " Основная тема - Сложные методы массивов"


// "call back функция"

// 



// function callback(x) {
//     console.log('Call')
//     console.log()
//     console.log()
// };

// function main(x) {
//     console.log('Main func')
// }




// 



// "метод forEach() - не мутирует массив и не возвращает новый массив, можеттолько перебрать и отобразить как-то"

// 1


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((item, index, array) => { // все передаст в таком же порядке
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
// });



// 2


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((index, elem) => { 
//     console.log(elem);
// });



// Задача 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach( item => { 
//    item % 3 === 0 ? console.log(item) : null;
// });






// " map() "


// 1


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.map((item, index, array) => {
//     console.log(item, index, array);
// });


// 2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item + 15;
//     } else {
//         return item;
//     };
// });
// console.log(arr);
// console.log(newArr);






// " filter() "


// 1)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((item, index, array) => {
//     return item % 2 === 0;
// });
// console.log(newArr);






// 2) больше 4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((item, index, array) => {
//     return item > 4;
// });
// console.log(newArr);




// 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter(function(item, index, array) {
//     return item % 3 === 0;
// });
// console.log(newArr);




// 4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function checkItem(item, index, array) {
//     return item < 5;
// };
// let newArr = arr.filter(checkItem);
// console.log(newArr);







// reduse()

// reduse(() => {}, initiaValue) - синтаксис
// промежуточный результат
// текущий элемнет массива
// индекс текущего элемента




// 1

// Вернуть сумму всех элементов массива

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
//     console.log(prevVal, currVal, currIndex, array);
// });



// 2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
//     return prevVal + currVal;
// });
// console.log(result);



// 3

// 






// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
//     return prevVal - currVal;
// });
// console.log(result);

// function add(x, y) {
//     return x + y;
// };



// 

// 








//" indexOf()"



// 1

// let arr = ['tom', 'jack', 'jessica'];
// console.log(arr.indexOf('jack'));



// 2

// let arr = ['tom', 'jack', 'jessica'];
// console.log(arr.indexOf('jack', 0));



// 3

// let arr = ['tom', 'jack', 'jessica', 'bob'];
// console.log(arr.indexOf('jack', 2));







//" includes()"


// let arr = ['helen', 'hello', 'jack', 'bob']

// let res = arr.includes('jack');
// console.log(res);




// "every()"


// 1

// let arr = [1, 2, 3, 4, 5];
// let res = arr.every((item, index, array) => {
//     return typeof item === 'number';
// });
// console.log(res);



// 2


// let arr = [1, 2, 'hello', 4, 5];
// let res = arr.every((item, index, array) => {
//     return typeof item === 'number';
// });
// console.log(res); //false





// "some()"



// 1


// let arr = [1, 2, 'hello', 4, 5];
// let res = arr.some((item, index, array) => {
//     return typeof item === 'string';
// });
// console.log(res);




// 2

// let arr = [1, 2, 3, 4, 5];
// let res = arr.some((item, index, array) => {
//     return typeof item === 'string';
// });
// console.log(res); // false





// "find()"

// 1


// let arr = ['hello', 'world', 'JS'];
// let res = arr.find(item => item.length === 5);
// console.log(res);



// 2

// let arr = ['hello', 'world', 'hello', 'JS'];
// let res = arr.find(item => item.length === 5);
// console.log(res);




// 3

// let arr = ['hello', 'world', 'hello', 'JS'];
// let res = arr.find(item => item.length === 2);
// console.log(res);


// 4

// let arr = ['hello', ['a', 'b'], 'world', 'hello', 'JS'];
// let res = arr.find(item => item.length === 2);
// console.log(res);


// 5








// "obj methods"

// let product = {
//     title: 'Sumsung',
//     price: 1000,
//     count: 3
// };

// console.log(Object.keys(product)); //['title', 'price', 'count']
// console.log(Object.values(product)); // ['Sumsung', 1000, 3]





// 2

// let product = {
//     title: 'Sumsung',
//     price: 1000,
//     count: 3,
//     color: ['black', 'gray', 'red']
// };

// console.log(Object.keys(product));






// "entries - метод"

// let product = {
//     title: 'Sumsung',
//     price: 1000,
//     count: 3,
//     color: ['black', 'gray', 'red']
// };

// console.log(Object.entries(product));


forEach()
