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
            const dayNow = dateNow.getDate();
            const yearNow = dateNow.getFullYear();

            const birthdaySplit = birthday.split('.');   
            const birthdayYear =  birthdaySplit[2];
            const userDay = new Date(birthdayYear, birthdaySplit[1]-1, birthdaySplit[0]).getDate();

            const userAge = userDay > dayNow? yearNow - birthdayYear - 1: yearNow - birthdayYear;
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