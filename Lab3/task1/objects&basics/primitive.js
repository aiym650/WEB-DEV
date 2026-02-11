// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;
stance, here user does the same as above using a combination of toString and valueOf instead of Symbol.toPrimitive:

let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2);