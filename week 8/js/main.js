// "asynk/await"

// async function func() { // такая пропись обезопасит т ошибки
//     await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => console.log(res));
//     console.log('hello');
// };

// func();









// '1' тут он просит запрос до того как приходит результат и приходит ошибка

// function func() {  
//     let res =  fetch('https://jsonplaceholder.typicode.com/posts/1') 
//     let data = res.json();
//     console.log('hello');
// };

// func();


// '1.1' тут мы это исправили

// async function func() {  // await без asynk не работает
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts/1') // кидает фетч запрос и возвращает ответ ответ.
//     let data = await res.json();
//     console.log(data);
//     console.log('hello');
// };

// func();








// try/catch

// '1'  ошибка

// let res = fetch('https://jsonplaceholder.typicode.com/posts/5');
// let data = res.json();
// console.log(data);
// console.log('HELLO');


// '2'


// try {
//     let res = fetch('https://jsonplaceholder.typicode.com/posts/5');
//     let data = res.json();
//     console.log(data); 
// } catch(error) {
//     console.log('ERROR', error);
// };
// console.log('HELLO');


// '3'


// try {
//     let res = fetch("https://jsonplaceholder.typicode.com/posts/5")
//     let data = res.json();
//     console.log(data); 
// } catch(error) {
//     console.log("ERROR")
// } finally {
//     console.log('Finish');
// };







// '1'

// try {
//     log('hello')
// } catch(error) {
//     if (error instanceof TypeError) {
//         console.log('TYPE ERROR');
//     } else if (error instanceof ReferenceError) {
//         console.log('REFERENCE ERROR');
//     } else {
//         console.log('UNKNOWN ERROR');
//     };
// };







// create
function addProduct() {
    let title = prompt("Enter title");
    let price = +prompt("Enetr price");
    let product = {
      title: title,
      price: price,
    };
    fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    alert("SUCCESS");
  }
  
  // read
  async function readProducts() {
    let res = await fetch("http://localhost:8000/products");
    let data = await res.json();
    let list = document.querySelector("ul");
    list.innerHTML = "";
    data.forEach((item) => {
      list.innerHTML += `
      <li style="border-bottom: 2px solid black; width: 20%">
      <p>ID: ${item.id}</p>
      <p>title: ${item.title}</p>
      <p>price: ${item.price}</p>
      </li>`;
    });
  }


// retrive

async function getProduct() {
    let productId = +prompt('Enter product ID');
    let res = await fetch(`http://localhost:8000/products/${productId}`);
    let data = await res.json();
    let list = document.querySelector("ul");
    list.innerHTML = "";
      list.innerHTML += `
      <li style="border-bottom: 2px solid black; width: 20%">
      <p>ID: ${data.id}</p>
      <p>title: ${data.title}</p>
      <p>price: ${data.price}</p>
      </li>
      `;
  }



// update

function updateProduct() {
    let productId = +prompt('Enter product ID');
    let newTitle = prompt('Enter new title');
    fetch(`http://localhost:8000/products/${productId}` , {
        method: 'PATCH',
        body: JSON.stringify(
            {title: newTitle}
        ),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
    });
    alert('SUCCESS')
};


// delete

function deleteProduct() {
    let productId = +prompt('Enter product ID');
    fetch(`http://localhost:8000/products/${productId}` , {
        method: 'DELETE'
    });
    alert('SUCCESS');
};

