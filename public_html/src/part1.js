var number = 10;
var number1 = 20;
var result = number + number1;
console.log(result);


var t = "Tania ";
var m = "Moura";
var nome = t + m;
console.log(nome);


car = {
    brand: "Seat",
    model: "Ibiza FR",
    engine: {
        Size: "1.9",
        Power: "130hp"
    },
    wheels: {
        Rims: "16inch 205mm",
        Tyres: "Pirelli Pzero Nero 205x45 R16"
    },
    color: "Dark Grey"
};
console.log([car]);

car2 = ["speed", "handling", "grip", ["confort", "space"]];
console.log([car2]);

var x = 100;
if (x < 100) {
    alert("Variable is less than 100");
} else if (x > 100) {
    alert("Variable is great than 100");
}


function miguel(name) {
    var name = "Tania";
    console.log(name);
}
miguel();

var word = 10;
var word1 = word.toString();
function myFunction(word, number1) {
    var number1 = 20;
    console.log(word1 + " " + number1);
}
myFunction();

var car = {brand: "seat fr", int: ["ac", "radio", "leader seats"], ext: ["metalic color", "xenon lights", "special wheels"]};

function showCar(car) {
    console.log(car.brand);
    for (var i = 0; i < car.int.length; i++)
    {
        console.log(car.int[i]);
    }
    for (var j = 0; j < car.ext.length; j++)
    {
        console.log(car.ext[j]);
    }
}
showCar(car);