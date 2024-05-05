//41. Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.

//Define a function to print each magician`s names.
function magicianNames(magicians: string []){
magicians.forEach(name => console.log(name));
}

//Define in array counting magician`s names
let magician_names = ["Herry Potter", "Usman", "Saad"];

//Call the function to print each magician names
 magicianNames(magician_names);