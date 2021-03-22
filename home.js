let price = 3 + 2 * 2,
  name = "Hiking Boots",
  discounted = false,
  times = 99;

let amount = 20 - -2;
let names = "Andrea";
let message = "Hello 'World'";
message = `Hello 

${names}`;
message = (message + " World").toLowerCase().toUpperCase();
message = message.substring(1).length;
message = "123";

amount = amount.toString();

amount = "123.12";
amount = Number.parseFloat(amount);

let saved = false;
saved = !saved;
saved = null;

let mySymbol = Symbol();

let person = {
  firstName: "John",
  lastName: "Adams",
  age: 32,
  partTime: false,
  [mySymbol]: "secretInformation",
  showInfo: function (realAge) {
    showMessage(this.firstName + " is " + realAge);
  },
};

showMessage(typeof message);
showMessage(message + 2);

price = 20;

if (+(1.1 + 1.3).toFixed(2) === 2.4) {
  showMessage("discounted");
}

price > 10 ? showMessage("yes") : showMessage("no");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 4;
while (i > 0) {
  console.log(i);
  i--;
}

i = 0;
do {
  console.log(i);
  i--;
} while (i > 0);

myFunction("hello");

person["age"] = 44;
person.showInfo(25);

// passing by value
function changeMessage(message) {
  message = "Hi!";
}

// passing by reference
function incrementAge(person) {
  person.age++;
}

changeMessage(message);
showMessage(message);

incrementAge(person);
showMessage(person.age);
