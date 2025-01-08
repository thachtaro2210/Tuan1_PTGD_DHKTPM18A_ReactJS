
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



let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);


let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;


console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1}`);
console.log(`John's BMI: ${johnBMI1}`);
//log ra xem Mark co cao hon John khong
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

console.log("Data 2:");
console.log(`Mark's BMI: ${markBMI2}`);
console.log(`John's BMI: ${johnBMI2}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);