// const welcomeMessage = (userName) => `Welcome, ${userName}!`;
// const NOT_ALLOWED_MESSAGE = "You are not allowed to visit this website.";
// const ARE_YOU_SURE_MESSAGE = "Are you sure you want to continue?";

// let userName;
// let userAge;

// do {
//     userName = prompt("Please, enter your name", userName);
//     if (userName === null) break;
//     userAge = prompt("Please, enter your age", userAge);
//     if (userAge === null) break;
// } while (!userName || Number(userName) || !Number(userAge));

// if (userName && userAge) {
//     if (userAge < 18) {
//         alert(NOT_ALLOWED_MESSAGE);
//     } else if (userAge <= 22) {
//         if (confirm(ARE_YOU_SURE_MESSAGE)) alert(welcomeMessage(userName));

//         else alert(NOT_ALLOWED_MESSAGE);
//     }
//     else {
//         alert(welcomeMessage(userName));
//     }
// } else {
//     alert(NOT_ALLOWED_MESSAGE);
// }
// Your code here
const till = {
    name: "Till",
    surname: "Lindemann",
    birthDate: "1963.07.14"
  };
  
  const richard = {
    name: "Richard",
    surname: "Kruspe",
    birthDate: "1967.06.24"
  };
  
  function getAge() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const birthdayDate = new Date(this.birthDate);
    const birthdayYear = birthdayDate.getFullYear();
    const age =
      birthdayDate.getMonth() < dateNow.getMonth() ||
      (birthdayDate.getMonth() === dateNow.getMonth() &&
        birthdayDate.getDate() <= dateNow.getDate())
        ? yearNow - birthdayYear
        : yearNow - birthdayYear - 1;
        console.log(this);
    return age;
  }
  
  console.log(getAge.call(till));
  console.log(getAge.call(richard));
  
  function Musician(name, surname, birthDate, band, instrument) {
    this.firstName = name;
    this.lastName = surname;
    this.birthDate = birthDate;
    this.band = band;
    this.instrument = instrument;
    this.getAge = getAge;
  }
  
  const musTill = new Musician(
    till.name,
    till.surname,
    till.birthDate,
    "Ramstein",
    "vocal"
  );
  console.log(musTill.getAge());
  