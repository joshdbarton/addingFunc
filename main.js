function addition (firstNum, secNum) {
    console.log(firstNum + secNum);
}
//Using fat arrow functions can make this a lot easier:
const additionConcise = (firstNum, secNum) => console.log(firstNum + secNum)

function subtraction (firstNum, secNum) {
    console.log(firstNum - secNum);
}   
//Using fat arrow functions can make this a lot easier:
const subtracterConcise = (firstNum, secNum) => console.log(firstNum - secNum)

//The clunky function I wrote for the exercise that does work:
const calc = (firstNum, secNum, operation) => {
    if (operation === 'addition') {
        console.log(firstNum + secNum)
    } else if (operation === 'subtraction') {
        console.log(firstNum - secNum)
    }
}
// Using a function reference we can make this code a LOT shorter:
const calcConcise = (firstNum, secNum, operation) => operation(firstNum, secNum)

addition(5, 4);

subtraction(9, 3);

addition(5.5, 10.2);

subtraction(15.3, 25.6);

calc (3, 5, 'addition');

calcConcise (4, 6, addition)


