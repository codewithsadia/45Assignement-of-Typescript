//Making a Function
function make_shirt (size : string = "Large" , printMessage : string = "I Love TypeScript" ){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
} 
//Calling a function with by-defult values
make_shirt();

//Calling the function now with Medium size and defult message
make_shirt("Medium"); 

//Calling a function now with small size and also Different Print message
make_shirt("Small", "I Love JavaScript")