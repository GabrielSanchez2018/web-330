/*
Title: sanchez-assignment-1.3.js
Date: 2/20/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Class Refresher 
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 1.3'));
console.log('\n');


// Create a cell phone function. 

function cellPhone(Manufacturer, Model, Color, Price){
  this.Manufacturer = Manufacturer;
  this.Model = Model;
  this.Color = Color;
  this.Price = Price;

this.getPrice = function(){
  return this.Price;
}
this.getModel = function(){
  return this.Model;
}
this.getDetails = function(){
  return "Manufacturer: " + this.Manufacturer + "\nMode: " + this.getModel() + "\nColor: " + this.Color + "\nPrice: " + this.Price;
}
}
var Galaxy = new cellPhone ("Android", "S9", "Golden", "999.99");

console.log(Galaxy.getDetails());

//End. 