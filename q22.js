//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//Test for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\n apple is not equal to apple");
console.log(apple != "apple");
//Test using the lower case function
console.log("\n is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
// Numerical tests
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
console.log("\n is ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\n is ten greater than zero?");
console.log(ten > 0);
//Less than
console.log("\n is twenty is less than 10");
console.log(twenty < 10);
// Greater than or equal to 
console.log("\n is greater than or equal to 5?");
console.log(ten > 5);
//less than or equal to
console.log("\n twenty  is less thsn or equal to 10?");
console.log(twenty < 10);
// Test using "and" & "or" operation
// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in array
console.log("\n is orange include in my fruits array ");
console.log(fruits.includes("orange"));
//Not includ
console.log("\n is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
export {};
