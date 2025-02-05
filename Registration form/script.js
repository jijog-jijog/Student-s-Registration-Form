function onSave() {
    var name =document.getElementById("inputname").value
    var age = document.getElementById("ageenter").value
    var email= document.getElementById("mailenter").value
    var gender = document.querySelector('input[name="male"]:checked') ? document.querySelector('input[name="male"]:checked').value : document.querySelector('input[name="female"]:checked') ? document.querySelector('input[name="female"]:checked').value : ""
    var course = document.getElementById("courseenter").value
    

    var row= document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    var cell3 = document.createElement("td")
    var cell4 = document.createElement("td")
    var cell5 = document.createElement("td")
    var cell6 = document.createElement("td")
    var deleteButton = document.createElement("button")

    cell1.innerHTML = name
    cell2.innerHTML = age
    cell4.innerHTML = gender
    cell3.innerHTML = course
    cell5.innerHTML = email
    deleteButton.innerHTML = "Delete"
    deleteButton.onclick = function() {
        row.remove()
    }
    cell6.appendChild(deleteButton);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    document.getElementById("tablebody").appendChild(row);

}