// "Синтаксис функции"

// function nameOfFunction(params) {
//     ...code...
// }

// "у функции можеть быть любое имя кроме зарезервированных , типо 'log' и тд"

// "Функции призваны для того чтобы не нарушать принцип dry "

// "1"

// function hello() {
//     console.log('Hello, world');
// };

// hello(); // вызываем функции , без этого она работать не будет. сколько раз и вызвали, столько и появилась

// "2"

// function counter () {
//     for (let i = 0; i < 10; i++) {
//         console.log(`Counter% ${i}. `);
//     };
// };

// counter();

// "3"

// function test(num, str) {
//     console.log(num, str);
// };

// test(15, 'hello');
// test(50, 'world');
// test(1, 'Tom');

// "3.1"

// function test(num, str) {
//     console.log(num, str);
// };

// test('hello', 15); // важен порядок
// test(50, 'world');
// test(1, 'Tom');

// "4"

// function congratFunc(firstName, lastName) {
//     confirm.log(`Happy birthday! ${firstName} ${lastName}`);
// };

// congratFunc('');
// congratFunc('');
// congratFunc('');

// "Дефолтные значения для параметров"

// "1"

// function welcomeFunc(username) {
//     alert(`Welcome: ${username}!`);
// };

// welcomeFunc('Tom');

// "1.2"
// function welcomeFunc(username= 'Guest') {
//     alert(`Welcome: ${username}!`);
// };

// welcomeFunc(); // если мы не хотим пустоту когда пользователь ничего не вводит, то мы можем написать это в коде

// "1.3"

// function welcomeFunc(username= 'Guest') {
//     alert(`Welcome: ${username}!`);
// };

// welcomeFunc('10'); // тут выйдет 10, тк его ранг больше

// "1.4"

// function welcomeFunc(username, lastName= 'Guest') {
//     alert(`Welcome: ${username} ${lastName}!`);
// };
//  welcomeFunc('Tom');
//  welcomeFunc('Jack', 'Jackon');

// "Если не знаем сколько данных (аргументов) передаст пользователь"

// "1"

// function func() {
//     console.log([...arguments]);
// };

// func(10, 4, 8, 'hello', true, null); // их может быть сколько угодно и с ними можно раблтать как с массивом. Сам аргумент не может быть массивом, поэтому псевдомассив

// "1.2"

// function func(a, b, c) { // если нам нужно всего 3 аргумента, а пользователь дал больше, что будет
//     console.log(a, b, c);
//     console.log([...arguments]);
// };

// func(10, 4, 8, 'hello', true, null);

// "Нужн выводить имя"

// '1'

// function _name() {
//     let firstName = prompt ('Enter name');// локально внутри функции. только там и живет
//     console.log(`Hello, ${firstName}!`);
// };
// _name()

// '1.1'

// function _name(firstName) {
//     console.log(`Hello, ${firstName}!`); // тут оращение на глобальном уровне, можно будет потом с именем что-нибудь сделать, тк оно сохранится
// };

// let argName = prompt('Enter name');

// _name(argName);

// "ноый пример"

// смотрит сперва локально , а потом глобально.  смоьрит снизу вверх. внутри локальное пространство, она делает то что нужно и все

// let firstName = 'jack'; // глобально

// function func() { // локально
//     let firstName = 'john';
//     console.log(firstName);
// };

// func();
// console.log(firstName);

// Хоисинг

// for
// if
// var name = 'Tom'; // до этого еще много чего-то, for и тд. В хоистинге он просто поднимает на самый верх

// "1"

// func();

// //console.log();
// //for
// //if

// function func () {
//     console.log('Hello'); // можно вызвать еще до ее написания/обьявления
// };

// "2"

// function addNums(num1, num2) {
//     //console.log(num1 + num2);
//     return num1 + num2 // что-бы мы до этого не писали главное слово имеет ретёрн, она что-то возвращает, но потом после ретерн код уже не читается
// };

// let summ = addNums(10, 15);
// console.log(summ);

// "3"

// function checkAge(age) {
//     if (age >= 18) {
//         return 'Вход разрешен'
//     } else {
//         return 'Вход воспрещен'
//     };
// };

// checkAge (25); // она что-то вернула, но не видно тк за видимость отвечает консоль лог . можно сделать это
// checkAge (15);

// "3.1"

// function checkAge(age) {
//     if (age >= 18) {
//         return 'Вход разрешен'
//     } else {
//         return 'Вход воспрещен'
//     };
// };

// console.log(checkAge (25));
// console.log(checkAge (15));

// "3.2"

// function checkAge(age) {
//     if (age >= 18) {
//         console.log('Вход разрешен');
//         return true
//     } else {
//         console.log ('Вход воспрещен');
//         return false
//     };
// };

// checkAge (25)
// console.log(checkAge (15));

// "Функция для вывода тип элемента"

// '1'

// function checkType(elem) {
//     console.log(typeof elem);
// };
// checkType(null);
// checkType('Hello');
// checkType(0);
// checkType(true);
// checkType({});

// '1.1'

// function checkType(elem) {
//     if (!elem) return; //  восклицательный знак отсеивает только фолс   . восклицательный знак берет какой-то элемент и  приводит к буллиавому типу
//     console.log(typeof elem);
// };
// checkType(null);
// checkType('Hello');
// checkType(0);
// checkType(true);
// checkType({});

// "Задача 1"

// создать функцию-калькулятор, на входе принимает 3 аргумента чмсло А число В и знак (+, -, *, /) использовать switch-case конструкцию

// function calcFunc(num1,num2, operation){
//     switch ( operation) {
//         case '+': return num1+num2;
//         case '-': return num1-num2;
//         case '*': return num1*num2;
//         case '/': return num1/num2;
//         default:return "Invalid operation";
//     };
// };
// console.log (calcFunc (10,20,'+'));//30
// console.log (calcFunc (100,35,'-'));//65
// console.log (calcFunc (5,45,'*'));//25
// console.log (calcFunc (200,10,'/'));//20
// console.log (calcFunc (10,20,')'));//Invalid operation

//task 2

// создать программу, которая будет добавлять заголовок первого уровня на страницу, у пользователя необходимо запросить цвет, размер и контент, затем добавить на страницу заголовок, использовать функцию

// function addTitle(){
// let content= prompt('Enter content of title');
// let color= prompt('Enter color of title');
// let size= prompt('Enter size of title');

// let titleElem = document.createElement('h1');
// titleElem.innerText=content;
// titleElem.style.color=color;
// titleElem.style.fontSize=`${size}px`;
// document.body.appendChild(titleElem);

// alert('SUCCESSFULLY ADDED!');
// };

// addTitle();








// task 3

// создать имитацию бд(полный CRUD(C-create, R-read, U-update, D-delete)), в качестве бд использовть массив, для каждого действия создать свою функцию, также необходима функция менеджер, которая в зависимости от выбора пользователя ьудет вызывать нужную функцию 


// const db = [90, true, "hello", 1, 54, false];

// function create() {
//   let elem = prompt("Enter data");
//   db.push(elem);
//   alert(`SUCCESSFULLY ADDED!`);
//   manager();
// }
// function read() {
//   alert(`Data ${db}!`);
//   manager();
// }
// function update() {
//   let elemNum = +prompt(`Enter number of elem from \n ${db}`);
//   let data = prompt("Enter new data");
//   db.splice(elemNum - 1, 1, data);
//   alert(`SUCCESSFULLY ADDED!`);
//   manager();
// }
// function _delete() {
//   let elemNum = +prompt(`Enter number of elem from \n ${db}`);
//   db.splice(elemNum - 1, 1);
//   alert(`SUCCESSFULLY DELETE!`);
//   manager();
// }
// function manager() {
//   let decide = prompt(
//     Create(c), read(r),update(u),delete(d), exid(e)
//   ).toLowerCase();
//   switch (decide) {
//     case "c":
//       create();
//       break;
//     case "r":
//       read();
//       break;
//     case "u":
//       update();
//       break;
//     case "d":
//       _delete();
//       break;
//     case "e":
//       //   exid();
//       console.log("exiting");
//       return;
//     default:
//       alert(`Invalid operation`);
//       return;
//   }
// }
// manager();
