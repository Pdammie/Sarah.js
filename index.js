// question 1

let trip = {
    destination: 'Abuja',
    duration: '15 hours',
    activities: ['swimming', 'mountain hike', 'visit aso rock', 'market tour'],
    budget: '150 thousand naira'
};
console.log(trip);


//question 2

function multiplyNumbers(num1 , num2){
    return num1 * num2
}
    let productOfNumbers = multiplyNumbers(4 , 7)
console.log(productOfNumbers);


//question 3

function convertSentenceToUpperCase(sentence){
    return sentence.toUpperCase()
}
    let upperCase = convertSentenceToUpperCase('i love tabitha')
    console.log(upperCase)






    //question 4
    function sumOffNumbers(num1 , num2 , num3, num4, num5){
        return num1 + num2 + num3 + num4 + num5
    }
        let sumOfNumbers = sumOffNumbers(3, 5, 7, 9, 2)
    console.log(sumOfNumbers)














    // conditional statement


    //question 5

    function getName(person){






        return person.name;
    }
        let person = { name: 'Adewale', age: 53 };
    console.log (getName(person));










    // conditional 
    let age = 18
    if(age >= 18) {
        console.log('you are able to drive a car');
    }

    if (age<18) {
        console.log('you are not able to drive a car')
    }

if ( age >=18){
    console.log('you are able to drive a car')
    console.log('you can vote')
}else {
    console.log('you are not able to drive a car')
}

//nested if statement

//if (condition){}

if (age >=18){
    console.log('you are able to drive a car');
    if (age >= 29){
        console.log('you can vote');
    }
}

//nested if else statement

if (condition){}
//code to be excuted if condition is true 
else if (condition){}
///code to be excuted if condition is true
else if{}
//code to be executed if condition is false

// switch statement


//
// let weekDay = 'wednesday'


//ternary operation
// || means or && means and