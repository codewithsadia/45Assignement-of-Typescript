//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//creating a guestlist Array
let guestList = ["Hania", "Saad", "Umaima", "Imran"];
//Making variable for those guest who cant come 
let dontcome = guestList[0];
//print the name of guest who cant come
console.log(dontcome, "Nahi Ahh sakte ha");
//Add or Remove values from guest list Array
guestList.splice(0, 1, "Hania");
//Message print for bigger table
console.log("Good News! we have found a bigger table for dinner.");
//Adding a new guest of starting index of Array
guestList.unshift("Ali");
//Adding a new guest at ending index of Array
guestList.push("Zain");
//Get a middle index of our guest list arrray
let middleindex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleindex, 0, "osama");
//print message of updated list 
console.log("updated list of our guests");
//sending a invitation message to our guest one by one with ther names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me `));
export {};
