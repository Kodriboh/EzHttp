const http = new EzHttp;

const data = {
    name: 'Robert McCann',
    username: 'bobmcc',
    email: 'bobmccann@gmail.com'
}

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Post Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .then(error => console.log(error));

// Put User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .then(error => console.log(error)); 

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));


