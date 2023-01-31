const userName = document.getElementById("inputName")
const userEmail = document.getElementById("inputEmail")
const userPassword = document.getElementById("inputPassword")
const confirmPassword = document.getElementById("inputConfirmPassword")
const loginForm = document.querySelector("#loginForm");


function login() {
    // Get the form data
    let email = userEmail.value;
    let password = userPassword.value;
    

    // Retrieve the array of users from local storage
    let users = JSON.parse(localStorage.getItem("users"));

    // Check if the entered email and password match a user in the array
    let validate = false;
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].password) {
            validate = true;
            break;
        }
    }

    if (validate) {
        // If the entered email and password match a user, log the user in
       return true;
    } else {
        // If the entered email and password do not match a user, show an error message
        alert("Incorrect email or password. Please try again.");
        return false;
    }
}

loginForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    if(login()){
        window.location.href = "userHome.html"
    };   
  })

