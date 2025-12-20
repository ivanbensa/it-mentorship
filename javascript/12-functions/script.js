function login(username, password) {
    if (username.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
        return true;
    }
    return false;
}

console.log(login("aDmin", "admin"));
