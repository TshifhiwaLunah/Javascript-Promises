const promise = new Promise((resolve, reject) => {
    let a = 5 * 5
    if (a == 25) {
        resolve('Sucess');
    } else {
        reject('Failed');
    }
})

promise.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch' + message);
})