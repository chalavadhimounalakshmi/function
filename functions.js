//1.Named function without input and without Return.(print positive Numbers)
function checknumber() {
    let num = 10;
    if (num > 0) {
        console.log("positive Number");
    } else {
        console.log("Not a Positive Number");
    }
}
checknumber();

//2.Named function without input and without Return.(largest of three  Numbers)
function largestnumber() {
    let a=20;
    let b=30;
    let c=40;

    if(a>b && a>c){
        console.log(a,"a is a largest Number")
    }
    else if (b>a && b>c){
        console.log(b,"b is a largest Number")

    }
    else{
        console.log(c,"C is largest Number")
    }
}
largestnumber();

//3.Named function without input and without Return.(Grade calculation)
function calculategrade() {
    let marks = 85;
    if (marks >=90) {
        console.log("A+ Grade");
    }
    else if (marks >= 80) {
        console.log("A Grade");
    } else if (marks >=70) {
        console.log("B Grade");

    } else if (marks >=60) {
        console.log("C Grade");
    } else if (marks >=50) {
        console.log("D Grade");
    } else{
        console.log("Fail");
    }
}
calculategrade();

//___________________________________________________________________________________________________________________//
//4.Named function with input and without return(Even or odd)
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("odd");
    }
}
checkEvenOdd(25);

//5.Named function with input and without return(Leap Year)
function checkleapyear(year) {
    if (year % 4 == 0) {
        console.log("Leap Year");
    } else {
        console.log("Not a leap year");
    }
}
checkleapyear(2026);

//6.Named function with input and without return(perfect Number)
function checkPerfect(num) {
    let sum = 0;
    let i = 1;

    while (i < num) {
        if (num % i === 0) {
            sum = sum + i;
        }

        i++;
    }

    if (sum === num) {
        console.log(num + " is a Perfect Number");
    } else {
        console.log(num + " is Not a Perfect Number");
    }
}

checkPerfect(28);
//______________________________________________________________________________________________________________________________________________//
//7.Named function without input and with return(check a number is positive or negative)
function checkNumber() {
    let num = -10
    if (num >=0) {
        return "positive" ;
    }else {
        return "negative";
    }
}
console.log(checkNumber());

//8.Named function without input and with return(check divisibility by 5)
function checkDivisibility(){
    let num = 25;
    if (num % 5 === 0) {
        return "divisible by 5"

    }else {
        return "Not Divisible by 5"
    }
}
 console.log(checkDivisibility());

//9.Named function without input and with return(check palindeome number)
function checkPalindrome() {
    let num = 121;
    let original = num;

    let reverse =
        (num % 10) * 100 +
        (Math.floor(num / 10) % 10) * 10 +
        Math.floor(num / 100);

    if (original === reverse) {
        return "Palindrome Number";
    } else {
        return "Not a Palindrome Number";
    }
}

console.log(checkPalindrome());

//______________________________________________________________________________________________________________________________//
//10.Named function with input and with return(multiple of 10)
function checkMultiple(num) {
    if (num % 10 === 0) {
        return "Multiple of 10";
    } else {
        return "Not a Multiple of 10";
    }
}

// console.log(checkMultiple(50));

//11..Named function with input and with return(check prime number)
function checkPrime(num) {
    let count = 0;
    let i = 1;

    while (i <= num) {
        if (num % i === 0) {
            count++;
        }

        i++;
    }

    if (count === 2) {
        return "Prime Number";
    } else {
        return "Not a Prime Number";
    }
}

// console.log(checkPrime(17));

//12.Named function with input and with return(calculate discount)
function calculateDiscount(amount) {
    if (amount >= 5000) {
        return amount * 0.20;
    } else if (amount >= 3000) {
        return amount * 0.15;
    } else if (amount >= 1000) {
        return amount * 0.10;
    } else {
        return 0;
    }
}

console.log(calculateDiscount(4000));



