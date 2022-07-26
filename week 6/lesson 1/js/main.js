
// "Поверхновное и глубкое копирование обьектов"

// let user = {
//     name: 'Tom',
//     age:30
// };
// let newUser = user;
// console.log(newUser);



// "Поверхносное копирование"

// let user = {
//     name: 'Tom',
//     age:30
// };

// let newUser = Object.assign({}, user);
// newUser.name = 'Helen';
// console.log(user);
// console.log(newUser);




// "Глубокое копирование"

// let product = {
//     title: 'T-shirt',
//     prise: {
//         s: 2000,
//         m: 3000,
//         l: 4000
//     }
// };

// let newProduct = { ...product };
// newProduct.title = 'Coat';
// newProduct.prise.l = 10000; // тут цена поменяется и в том что скопировано и в том откуда копируют
// console.log(product);
// console.log(newProduct);




// "1"


// let product = {
//     title: 'T-shirt',
//     prise: {
//         s: 2000,
//         m: 3000,
//         l: 4000
//     }
// };

// let newProduct = JSON.parse(JSON.stringify(product));
// newProduct.title = 'Coat';
// newProduct.prise.l = 10000; // в этом случае меняется только там где нужно, это глубокое копирование. Используем этот метод если мы знаем что будем менять и нам не нужны привязки(я про глубокое копирование)
// console.log(product);
// console.log(newProduct);





// "Деструктуризация"

// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Oil',
//     'Eggs'
// ];
// let  first = list[0];
// let second = list[1];
// console.log(first, second); // это сработает , но это долго




// "1.2"

// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Oil',
//     'Eggs'
// ];
// let [first, second, third, ...other] = list;
// console.log(first, second, third, other);







// "Другой пример"

// let arr = [
//     [0, 1, 2, [3]],
//     [4, 5, 6, 7]
// ];
// let [[a, b, c, [d]], newArr] = arr;
// console.log(a, b, c, d, newArr);




// "1"

// let arr = [
//     [0, 1, 2, [3, 10]], // так можно вывести 10
//     [4, 5, 6, 7]
// ];
// let [[a, b, c, [d, e]], newArr] = arr;
// console.log(a, b, c, d, e, newArr);



// "2"

// let arr = [
//     [0, 1, 2, [3]],
//     [4, 5, 6, 7]
// ];
// let [[a, b]] = arr; // если нужно всего 2 элемента
// console.log(a, b);





// "Другой пример"

// let person ={
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// };

// let age = person.age;
// let lastName = person.lastName;
// console.log(age, lastName);




// "1.2"

// let person ={
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// };

// let{name, age, lastName} = person;
// console.log(age, lastName, name);






// "Другой пример"

// let obj = {
//     subObj: {
//         name: 'Jack'
//     }
// };
// let {subObj: {name}} = obj;
// console.log(name);





// "Другой пример"

// let obj = {
//     arr: [
//         {
//             name: 'Tom'
//         }
//     ]
// };
// let {arr: [{ name }]} = obj;
// console.log(name);





// "Другой пример"

// function foo({ name }) {
//     console.log(name);
// };
// let person = {
//     name: 'Helen'
// };
// let person2 = {
//     name: 'Tom',
//     age:27
// };

// foo(person);
// foo(person2);





// "1.2"

// function foo({ name, age }) {
//     console.log(name);
//     console.log(age);
// };
// let person = {
//     name: 'Helen'
// };
// let person2 = {
//     name: 'Tom',
//     age:27
// };

// foo(person);
// foo(person2);




// "Другой пример"

// let arr = [0, 1, 2, 3, 4, 5];
// let [,,,a] = arr; // одна запятая это один пропуск, то есть мы сказали пропусти 3 элементв
// console.log(a);


// "1.2"

// let arr = [0, 1, 2, 3, 4, 5];
// let [,,,a,c] = arr; // одна запятая это один пропуск, то есть мы сказали пропусти 3 элементв, с обьектами немного по другому(по ключам), а это массив
// console.log(a,c);






// "Другой пример"

// function func(a, b, c) {
//     console.log(a, b, c);
// };
// let arr = ['hello', true, 10, 3, false];
// func(...arr);





// "Другой пример"

// let obj1 = {
//     name: 'Tom',
//     color: 'black'
// };
// let obj2 = {
//     lastName: 'N',
//     surname: 'J',
//     color: 'white'
// };
// let {color} = obj1; // black
// let newObj = {...obj2, color};
// console.log(newObj);





// "Другой пример"

// let obj = {
//     name: 'John',
//     age: 25,
//     work: [
//         'Python Mentor',
//         'JS Mentor',
//         'Develover'
//     ],
//     cat: {
//         name: 'Frank',
//         age: 3
//     }
// };

// let {
//     name: personName,
//     age,
//     work: [
//         first_skill,
//         second_skill,
//         ...other
//     ],
//     cat : {
//         name: catName,
//         age: catAge
//     }
// } = obj;
// console.log(name, age, first_skill, second_skill, catName, catAge);






// "Другой пример"

// let product = {
//     title: 'Sumsung',
//     price: 1000
// };
// let { title = 'Defolt title'} = product;
// console.log(title);



// '1.2'

// let product = {
//     title: 'Sumsung',
//     price: 1000
// };
// let { title = 'Defolt title', price} = product;
// console.log(title, price);


// '1.3'

// let product = {
//     price: 1000
// };
// let { title = 'Defolt title'} = product;
// console.log(title);


// '1.4'

// let product = {
//     title: 'Sumsung',
// };
// let { title = 'Defolt title', price = 'Defolt title' } = product;
// console.log(title, price);



// '1.5'

// let product = {
//     title: 'Sumsung',
//     price: 1000
// };
// let { title = 'Defolt title', price = 'Defolt title' } = product;
// console.log(title, price);





// "Другой пример"

// let obj = {
//     name: 'MarketPlace',
//     frameworks: ['React', 'DRF'],
//     versions: {
//         legacy: [2011, 2012, 2013]
//     }
// };
// //react, 2012
// let { frameworks: [react], versions: {legacy:[,year]} } = obj;
// console.log(react, year);





// "Другой пример"

// let obj = {
//     title: 'Cookies',
//     price: 150,
//     size: [
//         {title: 'sm', count: 2},
//         {title: 'md', count: 4},
//         {title: 'lg', count: 6}
//     ],
//     manufacturer: {
//         country: 'USA',
//         year: 2022
//     }
// }
// // решение
// let {title, price, size: [{title: title_sm, count: count_sm}, {title: title_md, count: count_md}, {title: title_lg, count: count_lg}], manufacturer: {country, year}} = obj;
// console.log(title, price, title_sm, title_md, count_md, title_lg, count_lg, country, year);