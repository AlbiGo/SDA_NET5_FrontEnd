// alert("helo");
console.log("helo");
this.Calculator(3,2,"*");
this.CreateArrayOfEvenNumbersMapMethod();

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

//Exercise 
//Function 
//Get all even numbers from an array of numbers and form another array from this array 
//and print them all 1 by 1

//There are 2 ways to achieve this
//1 - Foreach, Array Push
//2 - Array Map
//3 - Filter

//Declare const array[]
//function
function CreateArrayOfEvenNumbers()
{
    const numberArray = [1, 3, 45 ,27,3, 5, 5, 9, 9 ]; //array with 4 elements 
    let evenArray = [];
    //The new array should contain 2,5,6,56
    numberArray.forEach(p =>
        {
            if (p % 2 == 0)
            {
                evenArray.push(p);
            }
        })

    if (evenArray.length > 0)
    {
        evenArray.forEach(p =>
            {
                console.log(p);
            });
    }
    else
    {
        console.log("No even number was found");
    }
}

function CreateArrayOfEvenNumbersFilterMethod()
{
    const numberArray = [1, 4 ,3, 45 ,27,3, 5, 5, 9, 9 ]; //array with 4 elements 
    let evenArray = [];
    //The new array should contain 2,5,6,56
    evenArray = numberArray.filter(p => 
        {
            return p % 2 == 0;
        })

    if (evenArray.length > 0)
    {
        evenArray.forEach(p =>
            {
                console.log(p);
            });
    }
    else
    {
        console.log("No even number was found");
    }
}

function CreateArrayOfEvenNumbersMapMethod()
{
    const numberArray = [1, 4 ,3, 45 ,27,3, 5, 5, 9, 9 ]; //array with 4 elements 
    let evenArray = [];
    //The new array should contain 2,5,6,56
    evenArray = numberArray.map(p => 
        {
             if (p % 2 == 0)
             {
                return p;
             }
             
        })

    if (evenArray.length > 0)
    {
        evenArray.forEach(p =>
            {
                console.log(p);
            });
    }
    else
    {
        console.log("No even number was found");
    }
}