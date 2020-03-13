let myObj = [{
  name: 'jazzy',
  last: 'vazquez'
},
{
  name: 'michelle',
  last: 'pfost'
},
{
  name: 'leslie',
  last: 'evens'
}]

const myRes = {...myObj};

console.log(myRes[0]);

// ////////////////////////

let newObj = myObj.find(person => person.name === 'michelle')

console.log(`My new object is ${newObj.name}`);
