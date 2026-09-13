import { faker } from "@faker-js/faker";

const generateUsers = document.getElementById("generateUsers");
const usersHolder = document.getElementById("usersHolder");

generateUsers.addEventListener("click", () => {

    usersHolder.innerHTML = "";

    for (let i = 0; i < 10; i++) {

        const user = document.createElement("div");

        user.innerHTML = `
            <h3>${faker.person.fullName()}</h3>
            <p>Email: ${faker.internet.email()}</p>
            <p>City: ${faker.location.city()}</p>
            <p>Job: ${faker.person.jobTitle()}</p>
            <hr>
        `;

        usersHolder.append(user);
    }
});