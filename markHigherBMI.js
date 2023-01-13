// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// TEST DATA 1
let weightMark = 78;
let heightMark = 1.69;
let BMIMark = (weightMark / heightMark ** 2).toFixed(2);

let weightJohn = 92;
let heightJohn = 1.95;
let BMIJohn = (weightJohn / heightJohn ** 2).toFixed(2);

console.log('1) Boolean check if BMI Marks is higher than Mark?');
console.log('BMI Mark is ' + BMIMark);
console.log('BMI John is ' + BMIJohn);
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log('Mark has a higher BMI than John is ' + markHigherBMI + '.');

console.log('----------------------------------------------------------------');
console.log('\n');

// TEST DATA 2
weightMark = 95;
heightMark = 1.88;
BMIMark = (weightMark / heightMark ** 2).toFixed(2);

weightJohn = 85;
heightJohn = 1.76;
BMIJohn = (weightJohn / heightJohn ** 2).toFixed(2);

console.log('2) Boolean check if BMI Marks is higher than Mark?');
console.log('BMI Mark is ' + BMIMark);
console.log('BMI John is ' + BMIJohn);
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log('Mark has a higher BMI than John is ' + markHigherBMI + '.');

console.log('----------------------------------------------------------------');
console.log('\n');

console.log('3) Check with function if BMI Marks is higher than Mark?');
// Function for compare BMIs
function compareBMIs(markWeight, markHeight, johnWeight, johnHeight) {
	// Calculate BMIs
	let markBMI = markWeight / (markHeight * markHeight);
	let johnBMI = johnWeight / (johnHeight * johnHeight);

	// Compare BMIs
	let markHigherBMI = markBMI > johnBMI;

	// Output result
	if (markHigherBMI) {
		console.log('Mark has a higher BMI than John.');
	} else {
		console.log('John has a higher BMI than Mark.');
	}
}

// test with test data
console.log(
	'Test data 1) Mark(Weight=78, Height=1.69) ,John(Weight=92, Height=1.95)'
);
compareBMIs(78, 1.69, 92, 1.95);

console.log('\n');

console.log(
	'Test data 2) Mark(Weight=95, Height=1.88) ,John(Weight=85, Height=1.76)'
);
compareBMIs(95, 1.88, 85, 1.76);

console.log('----------------------------------------------------------------');
console.log('\n');
