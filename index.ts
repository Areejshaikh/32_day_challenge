// Day 32 Challenge: Start Coding! 🚀

// Question 94:
//define array
const word  : string[] = ["this is ","new" ,"method"];
const wordLength: number[]  = word.map(word => word.length); // use map() and lenght
console.log(wordLength);
word.forEach(word => {
});

// Question 95:

function filterMethods(number: number[]): number[] {
    return number.filter(number => number > 10);
}
const number: number[] = [5, 10, 15, 20, 25];
console.log(filterMethods(number)); // Outputs: [15, 20, 25]

// Question 96:

function wordreduce(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(wordreduce(numbers)); 
