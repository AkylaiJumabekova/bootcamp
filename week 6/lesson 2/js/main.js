
// "Продвинутый JS"

// 'DOM в JS'





// "Первый способ взаимодействия (селекторы)"

// '1'

// let title = document.getElementById('title'); // связывает джава скрипт документ и заголовок в HTML
// console.log(title);
// console.log(typeof title);


// '2'

// let list = document.getElementsByTagName('ul');
// console.log(list);
// let items = document.getElementsByClassName('item');
// console.log(items);


// '3'

// let inp = document.getElementsByName(['inp-name']);
// console.log(inp);




// "Второй способ взаимодействия"

// let title = document.querySelector('#title');
// console.log(title);
// let list = document.querySelector('ul');
// console.log(list);


// '1'

// let title = document.querySelector('#title');
// let list = document.querySelector('ul');
// let items = document.querySelectorAll('.item');
// console.log(items);


// '2'
// let title = document.querySelector('#title');
// let list = document.querySelector('ul');
// let items = document.querySelectorAll('.item');
// let inp = document.querySelectorAll('[name="inp-name"]');
// console.log(inp);




// "Разница между коллекцией и нод листом"

// let items = document.getElementsByClassName('item');
// let items2 = document.querySelectorAll('.item');
// console.log(items);
// console.log(items2);

// "Коллекция динамическая, она может изменяться по ходу создания(она увидит то что было динамически создано). ШТМЛ это не увидит , она видит только то что было записано изначально(статическая)"




//Пример 1

// let list = document.getElementsByTagName('ul');
// console.log(list[0]);


// '1'

// let list = document.getElementsByTagName('ul');
// list[0].innerHTML = '<li>New Elem</li>'

// '2'

// let list = document.getElementsByTagName('ul');
// list[0].innerHTML = '<li>New Elem</li>'
// list[0].innerHTML = '<li>New Elem 2</li>' // перезапись


// '3'

// let list = document.getElementsByTagName('ul');
// list[0].innerHTML = '<li>New Elem</li>'
// list[0].innerHTML += '<li>New Elem 2</li>'




//Пример 2

// let div = document.getElementsByClassName('hello')[0];
// console.log(div);

// '1'
// let div = document.getElementsByClassName('hello')[0];
// div.innerText = ''



// 
// 
// 
// 
// let h2 = document.querySelectorAll('h2');
//
//
//
//


//Пример 3

// let newElem = document.createElement('div');
// let container = document.querySelector('.container');
// console.log(newElem);
// console.log(container);



// '1'

// let newElem = document.createElement('div');
// let container = document.querySelector('.container');
// newElem.innerText = 'Hello, world';
// newElem.style.color = 'green';
// container.appendChild(newElem);




//Пример 4

////

///


//Пример 5


















