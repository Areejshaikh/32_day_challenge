// Day 32 Challenge: Start Coding! 🚀
// Question 94:
//define array
var word = ["this is ", "new", "method"];
var wordLength = word.map(function (word) { return word.length; }); // use map() and lenght
console.log(wordLength);
word.forEach(function (word) {
});
// Question 95:
// function wordfilter(number:number[]) {
//     return number.filter(number => number > 10);
// }
// const number: number[] = [2 , 4 , 6 , 8 , 10];
// console.log(wordfilter(number));
////////////////////////////////////////////
function filterGreaterThanTen(number) {
    return number.filter(function (number) { return number > 10; });
}
var number = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(number)); // Outputs: [15, 20, 25]
// Question 96:
function wordreduce(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(wordreduce(numbers));
