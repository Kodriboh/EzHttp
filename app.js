const http = new ezHttp();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(posts);
//    }
// });


// Get Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(posts);
//    }
// });

// Post Post
// const data = {
//     title: 'Custom post',
//     body: 'A custom post',
// }
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Put Post
const data = {
    title: 'Putted Post',
    body: 'A putted post',
}

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});