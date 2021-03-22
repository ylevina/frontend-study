const newUser = createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());

function createNewUser() {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const birthday = prompt("Enter your birthday 'dd.mm.yyyy':");
    return {
        firstName,
        lastName,
        birthday,
        getLogin() {
            return `${this.firstName[0]}${this.lastName}`.toLowerCase();
        },
        getAge(){
            const dateNow = new Date();
            const yearNow = dateNow.getFullYear();
            const birthdayDate = new Date(birthday.split('.').reverse().join('.'));
            const birthdayYear = birthdayDate.getFullYear(); 
            const userAge = birthdayDate.getDate() > dateNow.getDate() ? yearNow - birthdayYear - 1: yearNow - birthdayYear;
            return userAge;
        },
        getPassword(){
            const firstLetter = this.firstName.slice(0, 1).toUpperCase();
            const surname = this.lastName.toLocaleLowerCase();
            const year = this.birthday.slice(birthday.lastIndexOf('.') + 1);
            return `${firstLetter}${surname}${year}`;
        }
    };
}