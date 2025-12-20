function isOnline(status) {
    if (status === true) {
        console.log("User is online");
    } else {
        console.log("User is offline");
    }
}

isOnline(true);
isOnline(false);

//////////////////////////////////////////////////////////////

function userInfo(name, age) {
    if (age >= 18) {
        console.log(name + " is an adult");
    } else {
        console.log(name + " is not an adult");
    }
}

userInfo("Anna", 20);
userInfo("Peter", 16);
