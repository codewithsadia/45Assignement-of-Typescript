QUESTION_NUMBER: 45;
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\t \t ANSWER_NUMBER : 45 \n");
// Write a functions about a car
function CarInfo(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Store additional options in the car object
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with repuired information and additional options
let myCar = CarInfo('Toyota', 'civic', { colour: 'Black', year: '2023' });
console.log("returned object");
console.log(myCar);
export {};
