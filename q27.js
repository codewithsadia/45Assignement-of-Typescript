//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
//creatina a Array
let favorite_fruits = ["Mango", "Banana", "Apple"];
//using 5 independend if statements.
if (favorite_fruits.includes("Mango")) {
    console.log("I Really like Mango");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I Really like Banana");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I Really like Orange");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I Really like Apple");
}
if (favorite_fruits.includes("Cherry")) {
    console.log("I Really like Cherry");
}
export {};
