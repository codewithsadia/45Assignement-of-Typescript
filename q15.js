// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.
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
//inform that only two guests can be invited for dinner 
console.log("unfortuately,the new dinner table wont arrive on time ,so I can only invite two guest with me");
//using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}
console.log("invitation to the last 2 Guests.");
guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner.`));
//Removing last two Guest from the list 
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
export {};
