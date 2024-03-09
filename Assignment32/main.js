"use strict";
let current_users = ['ALI', 'Sara', 'mehar', 'Hurain', 'Shahmeer'];
let new_users = ['Usman', 'Ali', 'Zaroon', 'Zoha', 'Mehar'];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase()) || current_users.includes(new_users[i].toUpperCase())) {
        console.log(`Hey ${new_users[i]},you need to enter a new username`);
    }
    else {
        console.log(`Hey ${new_users[i]},this username is available`);
    }
}
