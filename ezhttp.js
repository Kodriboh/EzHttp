/**
 * EzHttp Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Luke McCann
 * @license MIT
 * 
 */

 class EzHttp {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(() => resolve('Resource Deleted!'))
            .catch(error => reject(error));
        });
    }
 }