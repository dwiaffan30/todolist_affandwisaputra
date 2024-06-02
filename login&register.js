document.addEventListener("DOMContentLoaded", function () {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    function saveUsersToLocalStorage() {
        localStorage.setItem("users", JSON.stringify(users));
    }

    window.login = function () {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        var user = users.find(function (user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            alert("Login successful!");
            window.location.href = "index.html"
        } else {
            alert("Invalid username or password!");
        }
    };

    window.register = function () {
        var username = document.getElementById("registerUsername").value;
        var password = document.getElementById("registerPassword").value;

        var userExists = users.some(function (user) {
            return user.username === username;
        });

        if (userExists) {
            alert("Username already exists!");
        } else {
            users.push({ username: username, password: password });
            saveUsersToLocalStorage();
            alert("Registration successful! You can now login.");
        }
    };
});