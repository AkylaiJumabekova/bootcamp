// "обьекты"

// let mentor = {
//     company: 'Makers',
//     _name: 'Alex',
//     job : 'JS-Dev',
//     age: 24
// };
// let mentor2 = { ...mentor };
// mentor2._name = 'Misha';
// console.log(mentor2);
// console.log(mentor.age); //24
// mentor.job = 'JS-Developer';
// mentor.lastName = 'N';
// console.log(mentor);
// mentor.age = 35;
// console.log(mentor);
// console.log(mentor.age); //35
// delete mentor._name;
// console.log(mentor);









// "Простые методы массивов"

// ' push/pop'


// '1'

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];

// console.log(friends[friends.length - 1]);






// 'push' ( добавляет в конец массива элемент)

// '1'

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];


// friends.push('Tom');
// console.log(friends)

// '2' // ро 1 элементу

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];

// friends.push('Tom');
// friends.push({});
// friends.push([13, 3]);
// friends.push(123);
// friends.push('Hello');
// friends.push(null);



// '3' // группой

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];

// friends.push(true, ['a', 'b'], 'makers!')


// '4'

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];

// const newArray = ['Ted', 'Bob', 23, null];
// friends.push(newArray);
// console.log(friends);








// pop() - удаление элемента с конца массива

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];

// let removedElem = friends.pop();
// console.log(friends);
// console.log(removedElem);







// 'unshift()' - добавляет в начало массива


// '1'

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];
// friends.unshift(1);
// console.log(friends);


// '2'

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];
// friends.unshift('hello', null, 23, ['a', 'b']);
// console.log(friends);





// shift() - удаляет элемент с начала массива

// const friends = [
//     'Peter',
//     'Jessica',
//     'Harry',
//     'Helen',
//     'Dave'
// ];
// let.shiftedElem = friends.shift();
// console.log(friends);
// console.log(shiftedElem); // не работает у меня 





// slice() - копирует и возвращает новый массив, принимает индексы ( с какого индекса начать - на каком индике остановиться ( не включительно))


// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice(0, 3);
// console.log(fruits);
// console.log(result);


// '2'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice(2, 1);
// console.log(fruits);
// console.log(result);


// '3' // берет с 1 элемента включительно и до последнего не включительно

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice(0, '3');
// console.log(fruits);
// console.log(result);


// '4' // возмет все

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice();
// console.log(fruits);
// console.log(result);

// '5' // с этого элемента включително (3) и до самого конца , берет как старт

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice(3);
// console.log(fruits);
// console.log(result);


// '6'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// const result = fruits.slice(0, 3 + 1);
// console.log(fruits);
// console.log(result);

// 'пояснение'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];

// const result = fruits.slice(); // копирует весь массив
// const result = fruits.slice(x); // x - начало до конца массива
// const result = fruits.slice(x, y); // начало - конец (индексы)







// 'slice'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// fruits,splice(1, 2);
// console.log(fruits);




// '2' // если взять больше элементов чем есть ошибки не будет

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// fruits,splice(1, 6);
// console.log(fruits);


// '3'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// fruits,splice(1, 3, 'Grape', 'Lime', true, null);
// console.log(fruits);


// '4'

// const fruits = [ ' Apple', 'Banana', 'Peach', 'Watermelon','Orange'];
// fruits,splice(1, 0, null, true, 10)
// console.log(fruits); // dont work, i dont know why





// join()- обьединяет все элементы списка в одну строку

// const fruits = [ ' Apple', 'Banana', 'Peach','Orange'];
// const joinedStr = fruits.join(' - ');
// console.log(joinedStr);


// '1'

// const fruits = [ ' Apple', 'null', 'Banana', 'Peach','Orange']; // null берет как пустоту
// const joinedStr = fruits.join(' - '); // если не будет разделителя , то он склеит все в 1 строку
// console.log(joinedStr);


// '2'


// const fruits = [ ' Apple', 'null', 'Banana', 'false', '3', 'Peach','Orange']; //уиу без разницы цифра это или буква
// const joinedStr = fruits.join(' - '); // если не будет разделителя , то он склеит все в 1 строку
// console.log(joinedStr);






// 'split()'


// const str = 'Makers first bootcamp in KG';
// const words = str.split(' '); // без раздеителя передаст все как 1 большой массив
// console.log(words);



// '2'

// const str = 'Makers first bootcamp in KG';
// const words = str.split(''); // без ничего разобьет все
// console.log(words);


// '3'

// const str = 'Makers first bootcamp in KG';
// const words = str.split('f'); // сам разделитель исчезает , для него это не элемент , а разделитель
// console.log(words);





// reverse () - переворачивает и меняет порядок элементов в обратную сторону

// const stringNum = ['first', 'second', 'third', 'fourth'];
// const reversestringNum = stringNum.reverse();
// console.log(stringNum);
// console.log(reversestringNum);





// '2'

// const str = 'Hello my name is Charlie';
// console.log(str.split(' '). reverse().join(' '));







// sort() - сортировка

// const fruits = [ ' Apple', 'null', 'Banana', 'false', '3', 'Peach','Orange'];
// fruits.sort();
// console.log(fruits);


// '2'

// const fruits = [ ' Apple', 'null', 'Banana', 'false', '3', 'Peach','Orange'];
// fruits.sort();
// const nums = [1, 43, 43, 2000, 2, 4, 10];
// nums.sort();



// '3'







