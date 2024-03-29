//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "Aqsa";

console.log(personName);

//lower case
console.log( `${personName.toLocaleLowerCase()} \t lower case`);

//upper case
console.log(`${personName.toUpperCase()} \t upper case`);

//title case
console.log(`${personName.charAt(0).toUpperCase ()+personName.slice(1,4)}\t title case`);
