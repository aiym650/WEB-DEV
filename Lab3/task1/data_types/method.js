let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

let str = "Hello";

str.test = 5; // (*)

alert(str.test);