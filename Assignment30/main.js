"use strict";
let usernames = ['Zaroon', 'Admin', 'Ali', 'Shahwaiz', 'Shahmeer'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'Admin') {
        console.log('Hello Admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again`);
    }
}
