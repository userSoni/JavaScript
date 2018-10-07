// JavaScript source code
//no.1
function sum(arg1, arg2, arg3) {
    return (arg1 + arg2 + arg3);
}
console.log(sum(1, 3, 4));
//no.2
function colorCar(color) {
    return "a" + color + " car";
}
console.log(colorCar(" red"));

//no.3
function Drinks(drink1, drink2) {
    this.drink1 = drink1;
    this.drink2 = drink2;
}

let hotdrink = new Drinks("Coffee");
let colddrink = new Drinks("Cocacola");

console.log(hotdrink.drink1);
console.log(colddrink.drink1);

//no.4

function vehicleType(color, code) {

    const type = { "1": "Car", "2": "Motorbike" };

    return "A " + color + " " + type[code] + ".";
}

console.log(vehicleType("blue", 2));

//no.5
console.log(3 === 3);

//no.6
function vehicle(color, modeltype, code) {

    const type = { "1": "new", "2": "used" },
        vtype = { "1": "Car", "2": "Motorbike" };

    return "A " + color + " " + type[modeltype] + " " + vtype[code] + ".";
}

console.log(vehicle("blue ", 2, 1));

//no.7 - no.8
let vehicles = ["motorbikes", "caravans", "bikes", "car", "Buses"];
let thirdEle = vehicles.slice(2, 3);

console.log(vehicles);
console.log(thirdEle);

//no.9
function vehicle(color, usetype, code) {

    const type = { "1": "new", "2": "used" },
        newtype = { "1": "Car", "2": "Motorbike", "3": "caravan" };

    return "A " + color + " " + type[usetype] + " " + newtype[code] + ".";
}

console.log(vehicle("green", 1, 3));

//no.10
let vehiclesList = ["motorbikes", "caravans", "bikes", "car", "buses"];
vehiclesList.sort();
for (var i = 0, len = vehiclesList.length, text = "Amazing Joe's Garage, we service "; i < len; i++) {
    text += vehiclesList[i] + ", ";
}

console.log(text);

//no-11
let vehiclesL = ["motorbikes", "caravans", "bikes", "car", "buses", "tempu", "truck"];
vehiclesL.sort();
for (var i = 0, len = vehiclesL.length, text = "Amazing Joe's Garage, we service "; i < len; i++) {
    text += vehiclesL[i] + ", ";
}

console.log(text);

//no.12
var emptyObj = {};
console.log(emptyObj.constructor);

//no.13
var obj1 = {
    a: "1",
    b: "this is the letter b",
    c: {
        foo: "what is a foo anyway",
        bar: [1, 2, 3, 4]
    }
};

var obj2 = {
    a: "1",
    b: "this is the letter b",
    c: {
        foo: "what is a foo anyway",
        bar: [1, 2, 3, 4]
    }
};

console.log(obj1 == 'foo');
console.log(obj1 === obj2);

//step 4: 
//ques: 3
function halfPyramid(height) {
    for (let i = 1; i <= height; i++) {
        var row = '';

        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

halfPyramid(6);

function sum(a, b) {
    //return (a + b);
}
let result = sum(1, 2);
alert(result);
