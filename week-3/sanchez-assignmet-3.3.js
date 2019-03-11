/*
Title: sanchez-assignment-3.3.js
Date: 3/7/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: The Singleton Pattern
*/
const header = require('../sanchez-header.js');

console.log(header.display("Gabriel", "Sanchez", "Assignment 3.2"));
console.log("\n")
var DatabaseSingleton = (function() {
    var instance;
  
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    }
  })();
 // Test Funtion  (Two database instances Oracle postgres)
 function DatabaseSingletonTest()
 {
     var oracle = DatabaseSingleton.getInstance();
     var postgres = DatabaseSingleton.getInstance();

     console.log("Same database instance?  %s", oracle === postgres);
 }

 //Call databaseSingletonTest() Function 
 
 DatabaseSingletonTest();