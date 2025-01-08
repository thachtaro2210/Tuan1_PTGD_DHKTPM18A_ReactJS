let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85;
let johnHeight2 = 1.76; 

function calculateBMI(mass, height) {
    return mass / (height * height); 
}


let markBMI1 = calculateBMI(markMass1, markHeight1).toFixed(1); 
let johnBMI1 = calculateBMI(johnMass1, johnHeight1).toFixed(1); 
let markBMI2 = calculateBMI(markMass2, markHeight2).toFixed(1); 
let johnBMI2 = calculateBMI(johnMass2, johnHeight2).toFixed(1); 


let result1 = "";
if (markBMI1 > johnBMI1) {
    result1 = `Mark BMI (${markBMI1}) cao hơn John (${johnBMI1})!`;
} else if (markBMI1 < johnBMI1) {
    result1 = `John BMI (${johnBMI1}) cao hơn Mark (${markBMI1})!`;
} else {
    result1 = `Mark BMI (${markBMI1}) bằng John (${johnBMI1})!`;
}


let result2 = "";
if (markBMI2 > johnBMI2) {
    result2 = `Mark BMI (${markBMI2}) cao hơn John (${johnBMI2})!`;
} else if (markBMI2 < johnBMI2) {
    result2 = `John BMI (${johnBMI2}) cao hơn Mark (${markBMI2})!`;
} else {
    result2 = `Mark BMI (${markBMI2}) bằng John (${johnBMI2})!`;
}


console.log("Outputs1:");
console.log(result1);

console.log("Outputs2:");
console.log(result2);
