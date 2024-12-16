let fullName = require('./names')
let hobbiesList = require('./hobbies')

function people(){
 return {
  name: fullName('lucia', 'susana'),
  hobbies: hobbiesList('nuoto', 'corsa', 'pesca')
 }
}

console.log(people());

