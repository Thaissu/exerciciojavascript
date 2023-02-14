let numberOne = Number(prompt("Let's play a little game! Can you type one number for me?"))
let numberTwo = Number(prompt("Thank you! Could you please give me one more number?"))
let number = 1
let result = (Number(numberOne) + Number(numberTwo))
let result2 = (Number(numberOne) - Number(numberTwo))
let result3 = (Number(numberOne) / Number(numberTwo))
let result4 = (Number(numberOne) % Number(numberTwo))
let result5 = (Number(numberOne) * Number(numberTwo))




if (result>=Number(100)) {alert(`awesome job! You gave me a big challenge, but I think I got it.`)} 
else {alert(`That's too easy, let's see if I got it.`)} 
alert(`the sum of your numbers is ${result}`)
alert(`and the subtraction of them is ${result2}`)
alert(`the division between them is ${result3.toFixed(2)}`)
alert(`this left us ${result4}`)
alert(`the multiplication of these numbers is ${result5}`)
if (result %2 == 0) {alert("the sum of your numbers result in an even number: " + Number(result) )} 
else {alert("the sum of your numbers result in an odd number " + Number(result))}
if (numberOne===numberTwo) {alert ("you gave me two equal numbers: "+ Number(numberOne))}
else{alert(`you gave me two different numbers: ${numberOne} and ${numberTwo}`)}
alert("thank you for participating on this challenge with me! :)");