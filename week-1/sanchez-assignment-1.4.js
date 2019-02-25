/*
Title: sanchez-assignment-1.4.js
Date: 2/20/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Duck Typing, A.K.A "Interfaces"
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 1.4'));
console.log('\n');

//  function constructor Car class with one parameter (model)
function Car(model){
	this.model = model;
}
////Add a prototype method to each class called “start” – hint: review the duck typing example
// Prototype
Car.prototype.start = function(){
	console.log("Car added to the Racetrack")
};
//function constructor Truck class with two parameters (model, year)
function Truck(model, year){
	this.model = model;
	this.year = year;
}
Truck.prototype.start = function(){
	console.log("Truck added to the Racetrack")
};
//function constructor Jeep class with three parameters (model, year, color)
function Jeep(model, year, color){
	this.model = model;
	this.year = year; 
	this.color = color; 
}
Jeep.prototype.start = function(){
	console.log("Jeep added to the Racetrack")
}
//Define an empty racetrack array
var racetrack = [];

//Create a driveIt function with one parameter (vehicle)
////From within the driveIt function call the “start” function on the vehicle – hint: vehicle.start and push the vehicle to the racetrack array

function driveIt(vehicle){
	vehicle.start();
	racetrack.push(vehicle);
}
//Create three (3) vehicle classes and pass them through the driveIt() function
var Impala = new Car("Impala");
var Titan = new Truck("Titan", "2017");
var jeep = new Jeep("Wrangle", "2019", "Black");

console.log("");

driveIt(Impala);
driveIt(Titan);
driveIt(jeep);

console.log("\n--The Following Vehicles have been added to the Racetrack--");
// Iterate over racetrack
for(var x = 0; x < racetrack.length; x ++){
	console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
//end




