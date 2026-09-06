let userId;

for (let i = 18; i <= 100; i++) {
    let ageOption = document.createElement("option")
    ageOption.innerText = i;
    document.getElementById("age").append(ageOption)
}

document.getElementById("registerButton").addEventListener("click", function (){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    if (name.trim() === "" || lastName.trim() === "") {
        alert("You must enter all required information");
        return
    }

    register(name, lastName, age)
});



function register(name, lastName,age) {
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
            /* other user data */
        })
    })
        .then(res => res.json())
        .then(function (data){
            userId = data.id;
            alert("You have successfully registered with the name " + data.firstName);

            // delete button start
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.type = "button";

            document.body.append(deleteButton);

            deleteButton.addEventListener("click", function () {
                deleteUser(deleteButton);
            });
            // delete button end
        });
}

function deleteUser(deleteButton) {
    fetch('https://dummyjson.com/users/' + userId, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            deleteButton.remove();
        });

    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 30,
        })
    })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
        })
}