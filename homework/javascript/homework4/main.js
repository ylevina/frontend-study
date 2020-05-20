let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");

if (firstName && lastName) {
    const newUser = createNewUser(firstName, lastName);
    console.log(newUser.getLogin());
}

function createNewUser(firstName, lastName) {
    return {
        firstName,
        lastName,
        getLogin() {
            return `${this.firstName[0]}${this.lastName}`.toLowerCase();
        }
    };
}