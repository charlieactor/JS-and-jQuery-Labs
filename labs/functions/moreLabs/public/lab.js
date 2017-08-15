/*
1 : Write a function named 'reverse' ...

This function will take one argument, a string.

Return the submitted string with the characters in reverse order.

***NOTE*** Do not use the 'reverse' method on the String object, write your own.
*/

/************** Your Solution Here ****************/
function reverse(reverseString) {
  var reversed = "";
  for (var i = reverseString.length - 1; i >= 0; i--) {

    reversed += reverseString[i];
  }
  return reversed;
}
/**************************************************/

/*
2 : Write a function named 'palindromeChecker' ...

This function will take one argument, a string.

If the provided string is a palindrome (the same backwards and forwards), return
true, otherwise return false.
*/

/************** Your Solution Here ****************/
function palindromeChecker(palindrome) {
  var check = reverse(palindrome);
  if (check == palindrome) {
    return true;
  } else {
    return false;
  }
}
/**************************************************/

/*
3 : Write a function named 'isPrime' ...

This function will take one argument, a whole number.

If the provided number is prime, return true, otherwise, return false.
*/

/************** Your Solution Here ****************/
function isPrime(number) {
  var bool = true;
  for (var i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      bool = false;
    }
  } return bool;
}
/**************************************************/

/*
4 : Write a function named 'computeTax'.

This function will take one or two arguments.

* The first argument will always be the amount tendered.

* The second argument, which is optional, could be the tax percentage (as a
whole number). If no second argument is provided, assume the tax rate is 7.5%.

Once applying the correct amount of tax, return the amount of tax owed.
*/

/************** Your Solution Here ****************/
function computeTax(amountTendered, taxPercentage) {
  if (taxPercentage == undefined) {
    taxPercentage = .075;
  } else {
    taxPercentage /= 100;
  }

  var taxOwed = amountTendered * taxPercentage;
  return taxOwed;
}
/**************************************************/
