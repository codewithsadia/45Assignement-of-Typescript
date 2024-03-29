//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userName = ["Hania", "Umaima", "Saad", "Bilal", "Sadia"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty we find some users!");
}
else {
    //using forEach Loop on Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
        }
    });
}
