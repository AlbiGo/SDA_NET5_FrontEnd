
// document.addEventListener("DOMContentLoaded", () => {
    
//     // debugger
//     // console.log("Hello World!");
//     // let element = document.getElementById("p1");
//     // console.log(element.innerHTML);
//     // document.getElementById("p1").innerText = "Some paragraph";
//     // document.getElementById("p1").style.color = "red";

//     // let paragraphElements = document.getElementsByTagName("p");
//     // console.log(paragraphElements);

//     // var array = [].slice.call(paragraphElements);

//     // // array.forEach(element => {
//     // //     console.log(element.innerText);
//     // // });
//     // console.log(paragraphElements[0]);

//     // for(let i = 0;i < 2 ;i++)
//     // {
//     //     console.log(paragraphElements[i]);
//     // }
    
//     // let parent = document.getElementById("mydiv");

//     // let newParagraph = document.createElement("p");

//     // parent.appendChild(newParagraph);
//     // newParagraph.setAttribute("id","newP");
//     // document.getElementById("newP").innerText = "New paragraph";


    
// });

window.onload = function() {
    let element = document;
    console.log(document.getElementById("p1"));
}


function MakeBlue()
{
    document.getElementById("p1").innerText = "Blue paragraph";
    document.getElementById("p1").style.color = "blue";
}

function showError()
{
    debugger;
    let ageNumber = document.getElementById("ageInput").value;

    if (ageNumber < 0)
    {
        let parent = document.getElementById("mydiv");

        let newParagraph = document.createElement("p");

        parent.appendChild(newParagraph);
        newParagraph.setAttribute("id","erroParapgrah");
        document.getElementById("erroParapgrah").innerText = "Age cannot be negative";
        document.getElementById("erroParapgrah").style.color = "red";
    }
}

function CalculateSum()
{
    debugger;
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);

    let action = document.getElementById("action").value;
    let result = 0;
    switch(action)
    {
        case "multiply":
            result = input1 * input2;
            break;
    }
    let parent = document.getElementById("calc");

    let newParagraph = document.createElement("input");

    parent.appendChild(newParagraph);
    newParagraph.setAttribute("id","result");
    newParagraph.setAttribute("type","number");

    document.getElementById("result").value = result;
    document.getElementById("result").style.color = "green";
}