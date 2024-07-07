//defining the callback function
function sayHi(name) {
  console.log(`Hello,` + name);
}
//defining the function that accepts a callback
function greetuser(callback) {
  const name = `Kiprop`;
  callback(name);
}
greetuser(sayHi);
