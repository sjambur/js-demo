let key = 42;

function showMessage(message) {
  document.getElementById("message").textContent = message;
  console.log(message);
}

let myFunction = function loggingFunction(message, firstName) {
  console.log(message);
  console.log(firstName);
};

let getSecretCode = function (value) {
  let keyGenerator = function () {
    let key = 12;
    console.log("in keyGenerator: ", key);
  };

  let code = value * keyGenerator();
  console.log("in getSecretCode: ", key);
  return code;
};

function changePercentOff(percentage) {
  document.getElementById('percent-off').textContent = percentage + '% OFF';
}
