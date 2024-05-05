//43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.
//Define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//function to make magicians great though .map() it will modify array of magicians
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//Define in array counting magician`s names
let magician_names = ["Herry Potter", "Usman", "Saad"];
//Making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();
//Modify the coppied array to include "The Greed" with there names
let copy_great_magicians = make_great(copy_magician_names);
//Show both array original and coppied
//original
console.log("original Array\n");
show_magicians(magician_names);
//coppied
console.log("\n coppied Array\n");
show_magicians(copy_great_magicians);
export {};
