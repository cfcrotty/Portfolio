var handlebars = require('handlebars');
const path = require("path");
const fs = require("fs");

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get('*', function (req, res) {
        let newArr = req.params[0].split("/");
        let page = newArr[1] || "about";
        if ((page == "about" || page == "contact" || page == "portfolio") && !newArr[2] ) {
            fs.readFile(__dirname + `/../public/${page}.html`, function (err, pageRes) {
                var data = {
                    data: pageRes
                }
                fs.readFile(__dirname + '/../public/main.html', 'utf-8', function (error, source) {
                    var template = handlebars.compile(source);
                    var html = template(data);
                    res.status(200);
                    res.send(html);
                });   
            });
        } else {
            res.status(404);
            res.sendFile(path.join(__dirname, "../public/error.html"));
        }
    });
};