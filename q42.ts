//42. Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to
//see that the list has actually been modified.

//Define the function to show magician names
function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name));
    }

    //function to make magicians great though .map() it will modify array of magicians
    function make_great(magicians : string[]){
        return magicians.map(name => `The Great ${name}` );
    }
    
    //Define in array counting magician`s names
    let magician_names = ["Herry Potter", "Usman", "Saad"];

    //call make_great function to modify magician names
    let great_magicians = make_great (magician_names);

    //call show_magicians that show modified list of  magicians
    show_magicians(great_magicians);
