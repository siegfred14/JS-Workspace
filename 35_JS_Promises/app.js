 //Promise concept with callbacks

let doTask = (success, failure) => {
    // doing the task
    let isDone = true;
    if (isDone) {
        success('Task is Done');
    }
    else {
        failure('Task is NOT Done');
    }
};

// call the doTask function, passing success and failure functions as parameters
doTask((message) => {
    console.log(message);
}, (message) => {
    console.error(message);
});

// Actual promise creation

let cleanCamera = new Promise((resolve, reject) => {
    //cleaning camera
    let isDone = true;
    if (isDone) {
        resolve('cleaning is Done');
    }
    else {
        reject('Cleaning is NOT Done')
    }
});

//to call the promise
cleanCamera.then((message) => {
    console.log(message);
}).catch((err) => {
    console.error(err);
})

//Depedent Promises in JavaScript

let buildProject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if (isDone) {
            resolve('Project is Finished');
        }
        else {
            reject('Project is NOT Finished')
        }
    }, 1000)
});

let attendTechnicalRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if (isDone) {
            resolve('Technical Round is Finished');
        }
        else {
            reject('Technical Round is NOT Finished')
        }
    }, 2000)
});

let attendManagerRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if (isDone) {
            resolve('Manager Round is Finished');
        }
        else {
            reject('Manager Round is NOT Finished')
        }
    }, 3000)
});
