        
        

        const userForm = document.querySelector("#createUserForm");
        const userName = document.getElementById("inputName")
        const userEmail = document.getElementById("inputEmail")
        const userPassword = document.getElementById("inputPassword")
        const confirmPassword = document.getElementById("inputConfirmPassword")



         // Ensure User Input complies with regex constraints
         function validateEmail() {

            // Regular expressions for validation
            let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
            if(!emailRegex.test(userEmail.value)){
                alert("Please enter valid email")
                return false;
            } else if (emailRegex.test(userEmail.value)){
                return true;
            }
        }

        function validatePassword(){

            let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            let passwordPass = passwordRegex.test(userPassword.value);
            let passwordMatch = userPassword.value == confirmPassword.value;

            if(!passwordPass){
                alert("Please enter valid password that includes: at least 8 characters, at least 1 letter, at least 1 number, and at least 1 special character");
                return false;
            } if(!passwordMatch){
                alert("Passwords do not match."); 
                return false;
            }
            else if( passwordPass && passwordMatch){
                return true;
            } 
        //      // Check if both passwords match 
        //     if(userPassword.value !== confirmPassword.value) {
                
        //         return false;
        // }
    }

        function signUp() {
             // Create a user object
             let user = {
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value
            };

            // Check if there are already any users in local storage
            if (localStorage.getItem("users") === null) {
                // If not, create a new array to store users
                let users = [];
                // Add the current user to the array
                users.push(user);
                // Save the array to local storage
                localStorage.setItem("users", JSON.stringify(users));
            } else {
                // If there are already users in local storage, retrieve them
                let users = JSON.parse(localStorage.getItem("users"));
                // Add the current user to the array
                users.push(user);
                // Save the updated array to local storage
                localStorage.setItem("users", JSON.stringify(users));
            }

            return true;
        }
            
      

   

        function saveEntry() {
            // Get the form data
            var title = document.getElementById("title").value;
            var entry = document.getElementById("entry").value;
            var date = new Date();

            // Create a journal entry object
            var journalEntry = {
                title: title,
                entry: entry,
                date: date
            };

            // Check if there is already a journal in local storage
            if (localStorage.getItem("journal") === null) {
                // If not, create a new array to store journal entries
                var journal = [];
                // Add the current journal entry to the array
                journal.push(journalEntry);
                // Save the array to local storage
                localStorage.setItem("journal", JSON.stringify(journal));
            } else {
                // If there is already a journal in local storage, retrieve it
                var journal = JSON.parse(localStorage.getItem("journal"));
                // Add the current journal entry to the array
                journal.push(journalEntry);
                // Save the updated array to local storage
                localStorage.setItem("journal", JSON.stringify(journal));
            }

            // Clear the form fields
            document.getElementById("title").value = "";
            document.getElementById("entry").value = "";

            alert("Journal entry saved!");
        }

      userForm.addEventListener("submit" , (e) => {
        e.preventDefault();
        if(validateEmail() && validatePassword()){
            if(signUp()){
                window.location.href = "userHome.html"
            }
        };   
      })

      




