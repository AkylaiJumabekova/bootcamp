















// "Цикл do...while" - делает потом думает




// while - перед тем как запустить код, он его проверяет


//  let i = 10;
//  while (i !== 10){
//     console.log('WORKED!');
//  };





//  "Тот же код через do while"

// let i = 10;

// do{
//     console.log('WORKED!', i);
//     i--;
// }while (i > 0);






// Задача 1

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     // console.log(matrix[i]); // просто выведет элементы массива
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }






// Задача 2

// const names = [
//     [
//         ['Helen', 'Tom'],
//         ['Jack', 'Peter']
//     ],
//     [
//         ['Jessica', 'Bob'],
//         ['Jimm', 'John']
//     ],
//     [
//         ['Alexa', 'Jessy'],
//         ['David', 'Paul']
//     ]
// ];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]); // массив внутри которого еще по 2 массива
//     for (let j =  0; j < names[i].length; j++) {
//         // console.log(names[i][j]);
//         for (let x =  0; x < names[i][j].length; x++) {
//             // console.log(names[i][j][x]);
//             if (names[i][j][x].length > 4) console.log(names[i][j][x]);
//         };
//     };
// };


// "Желательно делать всего 3 цикла. Глубина должна быть не более 3. Конечно можно больше,но желательно 3. В 1  цикле не более 3 циклов. Такой код нагружает систему. Код должен не нагружать работу. Чем сильнее нагружает, тем дольше грузит страница"





// Задача 3

// const data = [];

// while (true) {
//     console.log(data);
//     let answ = prompt('Add(a) or delete(d) element?');
//     if (answ.toLowerCase() == 'a'){
//         let elem = prompt('Enter data');
//         data.push(elem);
//     } else if (answ.toLocaleLowerCase() == 'd') {
//         let elemNum = +prompt(`Choose number of element from \n ${data}`);
//         data.splice(elemNum - 1, 1);
//     } else {
//         alert('Wrong operation');
//     };
//     let decide = prompt('Continue yes(y) or no(n) ?');
//     if (decide.toLowerCase() == 'n') {
//         break;
//     };
// };


// Задача 4


// const data = {
// electronic: ['Samsung', 'Apple', 'Xiaomi'],
// fruits:['Apple', 'Pineapple', 'Orange'],
// cars:['Audi', 'Mersedes', 'BMW']
// };

// while (true) {
//     let searchValue = prompt('что ищем?'). toLowerCase();

//     for (i in data) {
// for (j of data[i]) {
// if (j.toLowerCase()===searchValue) {
// alert(`товар найден в категории:${i}!`);
// };
// };
//     };
//     let decide = prompt ('Continue yes(y) or no(n)?');
//      if (decide.toLocaleLowerCase()=='n') {
//      break;
// };
// };





// Задача 5

// let flag= true; 
// while(flag) { 
//     let imgUrl=prompt('Enter image url'); 
 
//      const img= document.createElement('img'); 
//      img.setAttribute('src', imgUrl) 
//      img.style.width ='250px'; 
//      img.style.height ='250px'; 
//      img.style.marginLeft ='10px'; 
 
//      document.body.appendChild(img); 
//      alert('successfully added!'); 
 
//      prompt('continue yes(y) or no(n)?').toLocaleLowerCase()==='n'? 
//      flag = false: 
//      null 
// } ;