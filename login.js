// Login functionality
function validateLogin(username, password) {
    if (username && password) {
        console.log("Login successful");
        return true;
    } else {
        console.log("Invalid login credentials");
        return false;
    }
}

