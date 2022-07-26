// "Второй способ добавления из JS документа"

// let btn = document.querySelector('button');
// btn.onclick = () => alert('BTN CLICKED!');





// "Третий способ добавления из JS документа"

// 1

// "addEventListener()"

// let btn = document.querySelector('button');
// btn.addEventListener('click', () => alert('CLICKED!'));





// ""
// let btn = document.querySelector('button');
// function handler() {
//     console.log('CLICKED!');
// };
// btn.addEventListener('click',handler);




// ""

// let btn = document.querySelector('button');
// function handler() {
//     console.log('CLICKED!');
// };
// btn.addEventListener('click',handler);
// btn.removeEventListener('click', handler); // не сработало , тк мы добавили и удалили это



// ""
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM загружен полностью');
// });




// ""
// window.addEventListener('offline', () => {
//     console.log('Нет доступа к интернету');
// });

// window.addEventListener('online', () => {
//     console.log('Есть доступ к интернету');
// });







//click

// let div = document.querySelector('div');
// div.addEventListener('click', () => {
//     console.log('Clicked');

// });






// "2.."

// mousemove - реагирует на движение мыши
// mousedown - на нажатие кнопки мыши
// mouseup - реагирует на отжатие кнопки


// let img = document.querySelector('img');
// function zoom() {
//     img.style.width = '400px';
//     img.style.height = '400px';
//     img.style.transition = '2s';
// };

// function zoomOut () {
//     img.style.width = '200px';
//     img.style.height = '200px';
// };

// img.addEventListener('mousedown', zoom);
// img.addEventListener('mouseup', zoomOut);
// img.addEventListener('mousemove', (event) => {
//     console.log(event);
// });






// '1'

// let img = document.querySelector('img');
// function zoom() {
//     img.style.width = '400px';
//     img.style.height = '400px';
//     img.style.transition = '2s';
// };

// function zoomOut () {
//     img.style.width = '200px';
//     img.style.height = '200px';
// };

// img.addEventListener('click', (event) => {
//     console.log(event);
// });





// '2'

// let img = document.querySelector('img');
// function zoom() {
//     img.style.width = '400px';
//     img.style.height = '400px';
//     img.style.transition = '2s';
// };

// function zoomOut () {
//     img.style.width = '200px';
//     img.style.height = '200px';
// };

// img.addEventListener('click', (event) => {
//     console.log(event.target);
// });









// "3...."

// let inp = document.querySelector('input');
// inp.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });




// '1' отстала с 55 строки 70 нет строки 

// inp.addEventListener('copy', (e) => {

// })



// до 82 чтроки ничего нет

// "4...."


// document.addEventListener('keypress', e => {
//     console.log(e.key);
// });

// document.addEventListener('keydown', e => {
//     console.log(e.key);
// });

// document.addEventListener('keyup', e => {
//     console.log(e.key);
// });

// window.addEventListener('resize', () => {
//     console.log('Размер экрана был изменен');
// });





// "5..."

// let input = document.querySelector('input');
// let form = document.querySelector('form');
// let h1 = document.querySelector('h1');

// form.addEventListener('submit', (e) => {
//     console.log(e);
//     let value = input.value;
//     h1.innerText = value;
// });


// '1' можно остановить всплытие

// let input = document.querySelector('input');
// let form = document.querySelector('form');
// let h1 = document.querySelector('h1');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
//     let value = input.value;
//     h1.innerText = value;
// });






// "6...."


// let inpName = document.getElementsByName(["name-inp"]);
// // console.log(inpName);
// let inpPass = document.getElementsByName(["pass-inp"]);
// let inpAge = document.getElementsByName(["age-inp"]);
// let btn = document.getElementById ('btn');
// let users = [];
// btn.addEventListener ('click', () => {
//     let obj = {
//         name: inpName[0].value,
//         pass: inpPass[0].value,
//         age: inpAge[0].value
//     };
//     users.push(obj);
//     inpName[0].value = '';
//     inpPass[0].value = '';
//     inpAge[0].value = '';
//     console.log(users);
// });

