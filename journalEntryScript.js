const journalForm = document.getElementById("journal-form")
let journalDate = new Date();
let journalTitle = document.getElementById("title")
let journalText = document.getElementById("entry")



function saveEntry() {
    // Create a journal entry object
    let journalEntry = {
        title: journalTitle.value,
        entry: journalText.value,
        date: journalDate
    };

    // Check if there is already a journal in local storage
    if (localStorage.getItem("journal") === null) {
        // If not, create a new array to store journal entries
        let journal = [];
        // Add the current journal entry to the array
        journal.push(journalEntry);
        // Save the array to local storage
        localStorage.setItem("journal", JSON.stringify(journal));
    } else {
        // If there is already a journal in local storage, retrieve it
        let journal = JSON.parse(localStorage.getItem("journal"));
        // Add the current journal entry to the array
        journal.push(journalEntry);
        // Save the updated array to local storage
        localStorage.setItem("journal", JSON.stringify(journal));
    }

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("entry").value = "";
}

journalForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    saveEntry();  
    alert("Journal entry saved!");
    window.location.href = "userHome.html"
  })