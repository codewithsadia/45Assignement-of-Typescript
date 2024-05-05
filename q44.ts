//Q No: 44. Sandwiches: Write a function that accepts a array of items a person wants
//on a sandwich. The function should have one parameter that collects as many
//items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.

//Define the function with rest parameter
function makeSandwich(...items: string[]){

console.log("\n Making a sandwich with the following items: \n");

items.forEach(singleitem => console.log("-" + singleitem));

console.log("\n Now Enjoy sandwich");
}
//call the function 3 times using a different number of arguments each time
makeSandwich("chicken",  "cheese",  "egg",  "mayionis");

makeSandwich("Bread",  "Butter");

makeSandwich("chicken",  "cheese",  "egg",  "mayionis",  "Bread",  "Butter","Tomato");
