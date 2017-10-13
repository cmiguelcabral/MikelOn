var fs = require("fs");

exports.readfile = function (file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err)
            throw err;
        var countriesLIST = JSON.parse(data);
        return callback(countriesLIST);
    });
};