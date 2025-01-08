


let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];


let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

// Data Bonus 2
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];


function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}


function determineWinner(dolphinsScores, koalasScores) {
    let dolphinsAvg = calculateAverage(dolphinsScores);
    let koalasAvg = calculateAverage(koalasScores);

    console.log(`Dolphins Average: ${dolphinsAvg}`);
    console.log(`Koalas Average: ${koalasAvg}`);

    if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
        console.log("Dolphins win!");
    } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
        console.log("Koalas win!");
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
        console.log("It's a draw!");
    } else {
        console.log("Không có team chiến thắng bởi vì điểm số < 100");
    }
}

//data1
console.log("Outputs1 :");
determineWinner(dolphinsScores1, koalasScores1);
//data bonus1
console.log("\nOutputs1 bonus 1:");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);
//data bonus2
console.log("\nOutputs2 bonus 2:");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
