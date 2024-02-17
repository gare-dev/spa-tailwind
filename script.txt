function me() {

    let username = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    adm = "adm";

    if (username == adm) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }
    else {
        alert("Error");
    }

    if (username == "com" && password == "123" && email == "c@c.com") {
        const login = {
            user: username,
            pass: password,
            email: email
        }

        console.log(login);

    }
    else {
        const login = {
            user: "shit",
            pass: "shit",
            email: "shit"
        }

        console.log(login);


    }

}


