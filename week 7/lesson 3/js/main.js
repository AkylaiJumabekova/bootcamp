// setTimeout(() => {
//     console.log('Hello 1');
// }, 2000); // в мили секундах

// console.log('Hello 2');




// // "Пример"
// func1();
// func2();  10s
// func3(); // в этом случае выполнится 1 функция , ждем 10 сек и выполнится 2 , а только потом 3 функция. Ассинхронность помогает нам избежать этого. ММожно отправить вторую функцию в setTimeout и будет сперва работать 1 потом 3 и после истечения времени ожидания сработает 2





// "1"
// function func() {
//     console.log('Hello 1');
// };
// setTimeout(func, 1000);

// setTimeout(() => {
//     console.log('Hello 2');
// });

// console.log('Hello 3');





//  // "Пример"
// console.log('Hello 2');
// setTimeout(); // тк мы вызвали его и ничего не задали(время ожидания ) он ругается
// console.log('Hello 2');



 // "Пример"
//  setTimeout(() => console.log('Hello 2.5'));// если время не задано то он принимает его за 0, ноо
//  console.log('Hello 2');


//  // "Пример прода"
//  console.log('Hello 1');
// setTimeout(() => console.log('Hello 2.5'));// если время не задано то он принимает его за 0, ноо
// console.log('Hello 2'); // несмотря на то что время задержки равно 0 он все равно делает круг то будет немного медленнее того что без задержек 







 // "Пример"

//  const funcId_1 = setTimeout(() => {
//     console.log(1);
// }, 1000);

// const funcId_2 = setTimeout(() => {
//     console.log(2)
// }, 1500);
// console.log("ID" + funcId_1);
// console.log("ID" + funcId_2);


//  // "Пример прода"

// const funcId_1 = setTimeout(() => {
//     console.log(1);
// }, 1000);

// const funcId_2 = setTimeout(() => {
//     console.log(2)
// }, 1500);
// clearTimeout(2); // так можно очистить , точнее удалить





 // "Пример"

// let i = 0;
//  const id = setInterval(() => {
//      console.log(`Hello ${++i}`);
//  }, 1000);

//  setTimeout(() => { // это чтобы он постоянно не вызывал , то есть мы это контралируем
//      clearInterval(id);
//  }, 5000);







// "Промисы" /PROMISSES

// "1"

// const age = 20;
// const newPromise = new Promise(function(resolve, rejected){  
//     if(age >= 21) {
//         resolve({age, status: true});
//     }else {
//         rejected({age, status: false});
//     };
// }); 

// "Как же это все запустится? Если использовать консольлог то он вернет сам промис"





// "1.0"

// const age = 20;
// const newPromise = new Promise(function(resolve, rejected){  
//     if(age >= 21) {
//         resolve({age, status: true});
//     }else {
//         rejected({age, status: false});
//     };
// }); 
// console.log(newPromise); // ошибка из-за того что 20 > 21, нам не нужно чтобы промис возвращал промис



// "1.1"

// const age = 22;
// const newPromise = new Promise(function(resolve, rejected){  
//     if(age >= 21) {
//         resolve({age, status: true});
//     }else {
//         rejected({age, status: false});
//     };
// }); 
// newPromise.then(result => console.log(result, "SUCCESS"));



// "Обычно делают так"

// const age = 20;
// const newPromise = new Promise(function(resolve, rejected){  
//     if(age >= 21) {
//         resolve({age, status: true});
//     }else {
//         rejected({age, status: false});
//     };
// }); 

// newPromise // тк мы отловили таким образом ошибку, красной линии нет , просто пишут что ошибка
//     .then(result => console.log(result)) // в then успешный результат
//     .catch(err => console.log(err)) // тут плохой исход событий
//     .finally(() => console.log('FINISH')) // а finally сработает всегда , какой бы не был результат










// "Задача 1"

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Hello');
//             }, 1000);
//         }));
//     }, 1000);
// });
// console.log(p);




// "1"

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Hello');
//             }, 1000);
//         }));
//     }, 1000);
// });

// p
//     .then(promise => console.log(promise))
//     .catch(err => console.log(err))








// REQUESTS
// let req = new XMLHttpRequest();
// req.open("GET", "https://pokeapi.co/api/v2/pokemon/");
// req.send();
// req.onload = function() {
//     console.log(JSON.parse(req.response).results);
// };






//fetch()

let req = fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(result => console.log( result.json()))
    .then(data => console.log(data.results)) // если все хорошо сбда прилетит дейта
    .catch(err => console.log(err))

// console.log(req);


