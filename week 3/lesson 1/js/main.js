
// ""
// console.log("Hello, world");



// ""
// let name
// let name1
// let _name
// let $name "так писать можно "



// "Что касается названий , 2 варианта"
// let camelCase "нужно писат переменные так , через пробел нельзя"
// let snake_case 



// ""
// // let war const
// let name = 'Alex';    //строчные переменные пишутся в ковычках
// name = 'hello';
// console.log(_name);




// "зарезервированные слова использовать нельзя"



// "Константа"

// const birthDay = '18.08.1998';
// // " нельзя менять констатну , например"
// // "birthDay = '18.08.1998' так не получится "
// // "BIRTH_DAY - некоторые выделяют так , типо вообще не трогай"



// const age = 24;
// console.log('Hello')
// // let age = 30; так тоже нельзя




// var type = '15';
// console.log(type)
// // " если сделать так"
// // "console.log(type)"
// // "var type = '15';"
// // "то выдаст не найдено , тк ты пытаешься обратиться до того как задал"




// console.log(type);
// var type = 'JS';
// console.log(type);
// type = 30; // начиная с 24 строки началась перезапись. Вместо Питон будет 30
// console.log(type);




// let user1 = 'John'; 
// let user2 = user1;
// let user3 = user2;
// user3 = 'Bob';
// console.log(user2);
// console.log(user3);




// "типы данных"

// let id;
// console.log(typeof id);
// // "есть специальная пустота"
// // "let id = null"
// // "Она нужна когда мы знаем что будем что-то туда ложить"
// // "есть не специальная пустота"



// let id; //undefined
// id = 45; //number
// id = 45n; //bigint
// id = '45'; //string
// id = null; //null-object

// id = {
//     firstName: 'Tom',
//     age: 30,
//     work: 'IT',
//     pet: {
//         _name: 'Barsik',
//         type: 'cat'
//     }
// }//object //"обьект выглядит таким образом"
// console.log(id.pet._name);

// // console.log(typeof id);





// id = true;//boolean
// id = false;//boolean
// console.log(typeof id);




// // "ссылочный тип данных, массив"
// id = Symbol(); //symbol
// id = ['hello', 34, true, {firstName: 'Tom'}]; //Array
// console.log(typeof id);


// "Эксперимент"

// id = Symbol(); //symbol
// id = ['hello', 34, true, {firstName: 'Tom'}];
// // [
// //     {},
// //     {},
// //     {},
// // ]
// console.log(id[3]);
// // console.log(typeof id);



// "Эксперимент 2"

// id = Symbol(); //symbol
// id = ['hello', 34, true, {firstName: 'Tom'}];
// // [
// //     {},
// //     {},
// //     {},
// // ]
// console.log(id[-1]);
// // console.log(typeof id);


//ключам в обьекте могут быть только неизменяемые типы данных (чаще всего либо строка , либо число). Происходит перезапись . Массив либо расширяется , либо что-то добавляется. Массив можно менять > Как в общежитии. Жители комнаты меняются , но комнату мы не перестраиваем






// let hello = 'hello';
// let world= 'world';
// console.log(hello + ',' + world);



// let hello = 'hello';
// let world= 'world';
// let result = hello + ',' + world;
// console.log(hello + ',' + world);




// // "константы"

// const num1 = 50;
// const num2 = 25;
// const sum = num1 + num2;
// const result = sum - 45;
// const exp = 2 ** 4;
// const mul = 30 * 3;
// const div = 100 / 20;
// const res = 15 % 7;

// // let hello = ' hello, world' 

// // let hello = '100'  * '3'
// // let hello = ' 100v' * '4'
// console.log(hello);





// let firstName = 'Tom';
// let age = 30;
// console.log('Привет , меня зовут:' + firstName + ',' + 'мне' + age + 'лет!' );
// console.log(`Привет , меня зовут ${firstName}, мне ${age} лет!`); 


// $ это обращение к переменной и все