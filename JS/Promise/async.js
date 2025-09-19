// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data.id))


async function nameApi(url) {

    let promises= await fetch(url);

    let response=await promises.json();

    console.log(response);
    
}

nameApi('https://jsonplaceholder.typicode.com/todos/1')