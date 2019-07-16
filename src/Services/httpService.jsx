export class HttpService {
    constructor () {
        this.url = 'https://jsonplaceholder.typicode.com/todos/1';
        this.postUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    getData () {
        let promise = fetch(this.url);
        return promise;
    }

    //post data
    postData (obj) {
        let promise = fetch(this.postUrl, {
            method: 'POST',
            body: obj,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        return promise;
    }
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })