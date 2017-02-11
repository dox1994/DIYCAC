/**
 * Created by zihanwang on 8/21/16.
 */
var express = require('express');
var fs = require("fs");

var app = express();
app.use(express.static(__dirname + '/dist' ));

app.get('/get_past_examples', function(req, res)
{
    var responseObj = readJsonFileSync(__dirname + "/files/past_samples.json");
    res.end(JSON.stringify(responseObj));
});

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});
