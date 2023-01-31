
const journalHistory = document.getElementById("journal-history-display")

 let array = localStorage.getItem("journal")

 parseArray = JSON.parse(array)

 for(let i = 0; i < parseArray.length; i++){
    let array = localStorage.getItem("journal")
    parseArray = JSON.parse(array)


    let oldDate = parseArray[i].date
    let formatDate = new Date(oldDate).toLocaleDateString();

    let ul = document.createElement("ul");
    ul.setAttribute("class", "journal-entry-display")
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    

    li1.innerHTML = "Date: " + formatDate;
    li2.innerHTML = "Title: " + parseArray[i].title
    li3.innerHTML = "Entry: " + parseArray[i].entry
    ul.append(li1, li2, li3)
    journalHistory.append(ul);

 }
