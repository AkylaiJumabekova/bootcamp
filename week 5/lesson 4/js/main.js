// 1. Дан массив с объектами, каждый объект описывает определенного пользователя, использую данный массив вернуть 2 новых массива, в первом должны быть только имена, во втором возраст(использовать методы массивов)


// let users = [
//     { name: "Kim", age: 41 },
//     { name: "Kortney", age: 42 },
//     { name: "Khloe", age: 37 },
//     { name: "Kendall", age: 26 },
//     { name: "Kylie", age: 24 },
// ];
// let names = users.map(item => item.name);
// let age = users.map(item => item.age);
// console.log(names, age);







// 1.1 Используя массив с возрастом, который находится выше, необходимо посчитать средний возраст всех пользователей(использовать reduce)






// 2. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел(использовать методы массивов, в качестве callback function передавать function declaration)


// let arr = [5, 6, 7, 8, 9];




// let newArr = [];
// arr.forEach(function())




// 3. Дан массив с числами. Проверьте то, что все элементы в массиве положительные(использовать методы массивов)


// let arr = [5, 6, 7, 8, 9];




// 4. Дан массив с числами. Оставьте в нем только отрицательные числа(использовать методы массивов)


// let arr = [1, -3, 5, 6, -7, 8, 9, -11];




// 6. Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (использовать метод reduce()).


// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "John", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];




// 7. Bернуть массив следующего вида [[autoTitle, tax], [autoTitle, tax], [autoTitle, tax]], tax - налог на ввоз автомобиля в различные страны, расчитать по следующим условиям(авто до 2000 года выпуска: 50$ за кубический см, авто от 2000 до 2007 года выпуска: 40$, авто с 2007 до 2015 года выпуска: 30$, авто с 2015 года выпуска и выше: 20$)(использовать методы массивов)


// let cars = [
//     {title: 'Toyota', year: 2006, engVol: '2cm3'},
//     {title: 'Mercedes E-class', year: 1996, engVol: '2.4cm3'},
//     {title: 'Toyota Avensis', year: 2003, engVol: '1.7cm3'},
//     {title: 'Lexus LX570', year: 2020, engVol: '5.7cm3'},
//     {title: 'Mercedes S-class', year: 2010, engVol: '4cm3'}
// ];



// let newArr = cars.map((item) => {
//     let tax;
//     let year = item.year;
//     if (year < 2000) {
//       tax = parseFloat(item.engVol) * 50;
//     } else if (year > 2000 && year < 2007) {
//       tax = parseFloat(item.engVol) * 40;
//     } else if (year > 2007 && year < 2015) {
//       tax = parseFloat(item.engVol) * 30;
//     } else if (year > 2015) {
//       tax = parseFloat(item.engVol) * 20;
//     }
//     let arr = [item.title, tax];
//     return arr;
//   });
  
//   console.log(newArr);



// 8. Bернуть массив, в котором будут только названия 3х самых популярных постов(ориентироваться на лайки)(использовать методы массивов)


// let posts = [
//     {title: 'Post 1', author: 'User 1', likes: 549},
//     {title: 'Post 2', author: 'User 1', likes: 67},
//     {title: 'Post 3', author: 'User 3', likes: 345},
//     {title: 'Post 4', author: 'User 6', likes: 1023},
//     {title: 'Post 5', author: 'User 2', likes: 150},
// ];




