var file = "countries.json";
var fs = require("fs");

fs.readFile(file, 'utf8', (err, data) => {
    if (err)
        throw err;

    var countriesPARSED = JSON.parse(data);
    searchCountry(countriesPARSED);
});

function searchCountry(countriesLIST) {
    var found = false;

    for (var i = 0; i < countriesLIST.length; i++) {
        if (countriesLIST[i].name === process.argv[2]) {
            found = true;
            console.log();
            console.log("Country: " + process.argv[2]);
            console.log("Top Level Domain: " + countriesLIST[i].topLevelDomain);
            console.log();
            break;
        }
    }
    ;

    if (found === false) {
        console.log();
        console.log("--> Typed country doesn't exists, please review. <--");
        console.log();
    }
    ;
}