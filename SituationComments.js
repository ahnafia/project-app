function addRow(){
    let tr = document.createElement('tr');
    let name = prompt("Enter Name");
    let job = prompt("Enter Job");
    let comment = prompt("Enter a comment about your specific situation");
    let cellOne = tr.appendChild(document.createElement('td'));
    let cellTwo = tr.appendChild(document.createElement('td'));
    if (name != "" && job != "" && comment != "") {
        cellOne.innerHTML = name + " " + job;
        cellTwo.innerHTML = comment;
        document.getElementById("commentTable").appendChild(tr);
    }
}