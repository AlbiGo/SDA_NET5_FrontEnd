// alert("helo");
console.log("helo");
this.Calculator(3,2,"*");

//Exercise
//Make a function which takes
//three parameeters
//Input 1
//Input 2
//Action
//Based on action do 
//math calculations
//Example 1 => Sum
//Example 2 => Substraction
//Print result by calling 
//the function
function Calculator(num1, num2, symbol)
{
    let result = 0;
    switch(symbol)
    {
        case "*":
            result = num1 * num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    console.log(result);
}