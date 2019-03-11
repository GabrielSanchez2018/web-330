/*
Title: sanchez-assignment-3.2.js
Date: 3/7/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: The Factory Pattern
*/
const header = require('../sanchez-header.js');

console.log(header.display("Gabriel", "Sanchez", "Assignment 3.2"));
console.log("\n")

//Oracle, Informix different classes
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
}

function Oracle(properties) {
    this.username = properties.username || "OAdmin";
    this.password = properties.password || "OAdmin!";
    this.server = properties.server || "localhost:5454";
    this.version = properties.version || "10g"
}

function Informix(properties) {
    this.username = properties.username || "IAdmin";
    this.password = properties.password || "IFAdmin!";
    this.server = properties.server || "localhost:3030";
}

//databaseFactory function and if else statements
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function (properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySql") { // updating if statements
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle
    }
   if(properties.databaseType==="Informix"){
       this.databaseClass=Informix
   }
return new this.databaseClass(properties);
};

//create different instances
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: "MySQL",
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle=oracleFactory.createDatabase({
    databaseType:"Oracle",
    username:"OracleAdmin",
    password:"OAdmin!"
})
var informixFactory = new DatabaseFactory();
var informix=informixFactory.createDatabase({
    databaseType:"Informix",
    username:"IAdmin",
    password:"IFAdmin!"
})
//call oracle and informix instances
console.log(oracle);
console.log(informix);