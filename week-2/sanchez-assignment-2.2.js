/*
Title: sanchez-assignment-2.2.js
Date: 3/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Prototypes 
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 2.2'));
console.log('\n');

var Person = {
  getAge:function(){
		return this.age
		}
}

var Gabriel  = Object.create(Person, {
	"Age":{
		"value":"27",
	},
	"Fullname":{
		"value": "Gabriel Sanchez"
		
	}
});

Gabriel.getAge();

console.log("The person's full name is " + Gabriel.Fullname);
console.log("The paerson's Age is", + Gabriel.Age);



