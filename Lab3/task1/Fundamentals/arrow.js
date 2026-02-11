alert('Hello'); alert('World');
alert("There will be an error after this message")

[1, 2].forEach(alert)
function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}
typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
