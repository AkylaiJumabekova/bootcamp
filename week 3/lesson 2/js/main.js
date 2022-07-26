// "Вид запроса информации"

//alert('Hello, world);



// let name = prompt('Enter your name', 'Jack');
// console.log(_name);


// let result = confirm('...Are you sure?');
// console.log(result);



// "Операторы сравнения"

// // // // // const num1 = 10;
// // // // // const num2 = 20;
// // // // // console.log(num1 > num2); //false
// // // // // // "Пример 2"
// // // // console.log(20>=15); //false
// // // // // // "Пример 3"
// // // console.log(10<20); //true
// // // // // // "Пример 4"
// // console.log(60<= 50);//false
// // // // // // "Пример 5"
// console.log("10asdfg > 20"); //false


// Нестрогое сравнение
// console.log('10' == 10);


// Строгое сравнение
// console.log('10' === 10);


// = - присваивание
// == - нестрогое сравнение (только значение)
// === - строгое сравнение (и по типам ланных + значение)


// "нестрогое неравенство"
// console.log("24" != 24); //fale



// "строгое неравенство"
// console.log("24" !== 24); //true






//Boolean
// console.log(Boolean("string")); //true тк строка не пустая


// console.log(Boolean("")); //false


// console.log(Boolean(" ")); //true, тк пробел это символ и он учитывается. Будь то точка или восклицательный знак


// console.log(Boolean("false")); //true тк эт просто строка с контентом


// console.log(Boolean("40")); // true


// console.log(Boolean("0")); //false, тк 0 приравнивается к false


// console.log(Boolean("-1")); // true потому что это что-то


// console.log(Boolean({})); // true , пустой обьект это тоже true

// console.log(Boolean([])); // true , пустой обьект это тоже true, тоже самое


// console.log(Boolean(null)); // false


// console.log(Boolean(underfined)); // false



// // "FALSE"
// 0
// null
// undefined
// ''
// false







// "Логические операции и зачем они нужны"

// let age = 20;
// console.log(age > 18);


// let age = 20;
// console.log(age < 60);


// let age = 20;
// console.log(age > 18 && age < 60); // true


// let age = 20;
// console.log(age > 21 && age < 60); //false, тк 21 > 20


// let age = 20;
// console.log(age > 18 && age < 60  && age == 20); //true

// Чтобы все было true, нужно чтобы все было верно


// console.log( true && false); //false

// console.log( true && true); //true

// console.log( true  && true && false); //false, тк есть 1 неправда





// "|| - or (или)"

// console.log(false || true)// true


// console.log(true || true)// true


// console.log(false || true || false)// true, если есть хоть 1 true, то вернет true



// let age = 30;
// console.log(age > 20 || age > 40);
// true || false
// true


// const isAdmin = false;
// const imgUrl = 'image/jpeg';
// const result = isAdmin || imgUrl;
// console.log(result)


// let book = 'hello';
// const author = null;
// const title = '';
// const result = book || title || '1' || author;
// console.log(result); //берет первую true, это book, book==>hello, сл-но возмет hello





// " у оператора И приоритет больше чем ИЛИ, следовательно выполняться сперва будет И "


// Пример

// console.log(true || false && true);
// //как в математике, сперва И потом ИЛИ , но если поставить скобки, то ИЛИ может стать важнее


// console.log('hello' && false); //false 

// console.log(Boolean('hello') && false); 



// console.log(('hello' && false) || (null && true));
// false || (null && true)
// false || null
//null

// console.log('hello' || 0 || true); // hello


// console.log( true || 0 || 'hello'); // true выйдет, тк он берет первое true




// console.log(false || 0 || ''); // true берет первое тру, false берет последнее фалс это если ИЛИ , если И , то он берет поледний тру и первый фалс


// "false - это буллевый тип данных"



// console.log('' || (30 && '1' && 10 == 10) || false);
// // по дейтвиям
// '' || ('1' && 10 === 10) || false
// '' || (true) || false
// true




// " если ИЛИ , то он берет 1 тру и последний фалс "
// " если И , то он берет последний тру и 1 фалс "






// "Оператор НЕТ"
// ! - not , вернет противоположное значение




// console.log(!true); // вернет фалс, тк говорим не тру


// console.log(!'');


// console.log(!50);





// "ПРИОРИТЕТНОСТЬ: ! ==> && ==> || "




// " !! - приводят к логическому типу ( тру или фалс)"

// console.log(!!false);


// console.log(!!50);


// console.log(Boolean(50));


// console.log(Boolean(50) === !!50);
// (по сути !! заменяет булиам , но отличаются. Они возвращают одно и то же)








// " преобразователи и что-то ещё"

// const stringNum = '100';

// console.log(+stringNum); // 100 number

// console.log(+true); //1 по умолчанию

// console.log(+false); //0 

// console.log(+null); //0

// console.log(+undefined); //NaN

// console.log(+'h2'); //NaN


// " Строки в число"

// 'parseInt()'

// console.log(parseInt('50gdyucbbe100 dhjbhdfbhd')); //идет считывание до первого числа (до 1 символа точнее), тут выйдет 50


// console.log(parseInt('gdyuc50bbe100 dhjbhdfbhd')); //идет считывание до первого числа (до 1 символа точнее), тут выйдет NaN


// console.log(parseInt('1true')); // выйдет 1

// console.log(parseInt('1  2true')); // выйдет 1, тк пробел не число, однако перед числом он пробелы не видит

// console.log(parseInt('   1true'));






// 'parseFloat()'

// console.log(parseFloat('4.4567.7')); // выведет до 2 точки , тк дробные пишутся через точку
// console.log(parseFloat('4  .4567.7')); // пробелы он считает как символ, так что выйдет только 4







// "условные операторы"

// if (условие) {
//     выполняй этот код
// } else {
//     тогда выполняй этот код
// }


// "1"

// const age = 50;
// if (age >=18) {
//     console.log('ACCESS GRANTED!')
// } else {
//     console.log('ERROR')
// }


// const age = 17;
// if (age >=18) {
//     console.log('ACCESS GRANTED!')
// } else {
//     console.log('ERROR')
// }




// "2"

// let user = {
//     isAdmin: false
// } 


// if (!user.isAdmin) {
//     console.log('You are not admin')
// } else {
//     console.log('You are admin')
// }








// if (условие1) {
//     код 1
// } else if (условие2) {
//     код 2
// } else if (условие2) {
//     код 3
// }else {
//     код 4
// }



// "1"
// let age = 20;
// if (age < 20) {
//     console.log('возраст меньше 20 лет');
// } else if (age == 30) {
//     console.log('возраст 30 лет');
// } else if (age >= 20 && age < 30) {
//     console.log('возраст от 20 до 30 лет' // или 'возраст в диапазоне от 20-30 лет');
// }else {
//     console.log('возраст больше 30 лет')
// }


// "2"

// let sale = 20;
// let buyMac;
// if (sale > 50) {
//     buyMac = true;
// } else {
//     buyMac = false;
// }
// console.log(buyMac); // слишком длинный код


// "2.1"

// условие ? действие 1 : иначе другое действие 
// let sale = 20;
// let buyMac = sale > 50 ? true : false 
// console.log(buyMac); // покороче




// "3"

// let mark = prompt ('Enter your mark');
// let result = mark >= 40 ? 'pass' : 'fail';
// console.log( `You ${result} the exam.`);








// "Конструкция switch - case"

// const income = 200;
// switch (income) {
//     case 100:
//         console.log('Доход равен 100');
//         break;
//     case 200:
//         console.log('Доход равен 200');
//         break;
//     case 300:
//         console.log('Доход равен 300');
//         break;
//     default:
//         console.log('Доход не определен');
// }



// через if конструкцию

// const income = 100;

// if (income === 100) {
//     console.log('Доход равен 100');
// } else if (income === 200) {
//     console.log('Доход равен 200');
// } else if (income === 300) {
//     console.log('Доход равен 300');
// } else  {
//     console.log('Доход не определе');
// }




// "2"

// let num = 100;
// if (num >= 100) {
//     if (num === 150) {
//         console.log('число равно 150');
//     } else {
//         console.log('число просто больше 100');
//     }
// } else {
//     console.log('число меньше чем 100' );
// }





// "2.1"

// let num = '100';
// if (num >= 100) {
//     if (num === 150) {
//         console.log('число равно 150');
//     } else {
//         console.log('число просто больше 100');
//     }
// } else {
//     console.log('число меньше чем 100' );
// }

// console.log('100a' > 50);







