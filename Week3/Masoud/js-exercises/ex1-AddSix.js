/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(num) {
  // Put here your logic...
  function add(num) {
    return num + 9;
  }
  return add;
}

const addSix = createBase(6);

console.log(addSix(6));
console.log(addSix(15));
console.log(addSix(24));
// Put here your function calls...

